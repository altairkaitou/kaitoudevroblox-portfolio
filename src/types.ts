/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Tab {
  About = "About Me",
  Roblox = "Scripting",
  Blender = "3D Modeling",
  Contact = "Contact"
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: string;
}
