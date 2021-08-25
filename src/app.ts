import * as cdk from "@aws-cdk/core";

import { SkillStack } from "./skill-stack";

const app = new cdk.App();

new SkillStack(app, "MySkillStack");