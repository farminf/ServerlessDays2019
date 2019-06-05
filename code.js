/* eslint-disable no-new */

const cdk = require("@aws-cdk/cdk");
const {
  Project,
  ComputeType,
  NoBuildArtifacts,
  GitHubSource,
  LinuxBuildImage,
  BuildEnvironmentVariableType,
} = require("@aws-cdk/aws-codebuild");
const { SecretParameter } = require("@aws-cdk/cdk");
const { PolicyStatement } = require("@aws-cdk/aws-iam");

class HIDockerUpdater extends Project {
  constructor(parent, id, props) {
    const { branch = "master" } = props;
    const oauthToken = new SecretParameter(
      parent,
      `GitHubOAuthTokenTest_${id}`,
      {
        ssmParameter: "xd_githuboauthtoken",
      }
    );

    super(parent, id, {
      ...props,
      cacheBucket: undefined, // no cache
      artifacts: new NoBuildArtifacts(),
      source: new GitHubSource({
        owner: "dtttd",
        repo: "hi",
        oauthToken: oauthToken.value,
      }),
      timeout: 20,
      environment: {
        buildImage: LinuxBuildImage.UBUNTU_14_04_NODEJS_10_1_0,
        computeType: ComputeType.Small,
        privileged: true,
        environmentVariables: {
          BRANCH: {
            value: branch,
            type: BuildEnvironmentVariableType.PlainText,
          },
        },
      },
      buildSpec: `
version: 0.2
phases:
  build:
    commands:
      - npm i -g yarn
      - apt-get update -y
      - apt-get install -y docker wget
      - wget https://github.com/jmespath/jp/releases/download/0.1.2/jp-linux-amd64 -O /usr/bin/jp && chmod +x /usr/bin/jp
      - bash ci/docker-hibuild/release-image.sh
`,
    });

    this.addLoggingPermissions();
    this.addSSMPermissions();
    this.addECRPermissions();
  }

  addECRPermissions() {
    const statement = new PolicyStatement();
    statement.allow();
    statement.addActions(["ecr:*"]);
    statement.addAllResources();
    this.addToRolePolicy(statement);
  }

  addLoggingPermissions() {
    const statement = new PolicyStatement();
    statement.allow();
    statement.addActions([
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]);
    statement.addResources("arn:aws:logs:*:*:*");
    this.addToRolePolicy(statement);
  }

  addSSMPermissions() {
    const statement = new PolicyStatement();
    statement.allow();
    statement.addAction("ssm:GetParameter");
    statement.addResources(`arn:aws:ssm:*:${cdk.Aws.accountId}:parameter/xd_*`);
    this.addToRolePolicy(statement);
  }
}

module.exports.HIDockerUpdater = HIDockerUpdater;
