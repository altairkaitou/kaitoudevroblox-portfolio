/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Tab {
  About = "About Me",
  Projects = "Projects",
  Roblox = "Roblox Dev",
  Blender = "3D Modeling",
  Contact = "Contact"
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  link?: string;
  tags: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: string;
}
