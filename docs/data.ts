export interface PackageData {
  /** Package name as in npm, for example, `mantine-extension-template` */
  packageName: string;

  /** Description of the package, displayed below the title in documentation */
  packageDescription: string;

  /** Link to the documentation mdx file, used in "Edit this page button" */
  mdxFileUrl: string;

  /** Link to the repository on GitHub, used in header github icon and in "View source code button" */
  repositoryUrl: string;

  /** Link to the license file */
  licenseUrl?: string;

  /** Information about the author of the package */
  author: {
    /** Package author name, for example, `John Doe` */
    name: string;

    /** Author GitHub username, for example, `rtivital` */
    githubUsername: string;
  };
}

export const PACKAGE_DATA: PackageData = {
  packageName: '@gfazioli/mantine-rings-progress',
  packageDescription: 'A Mantine component that replicates the progress rings of Apple Watch.',
  mdxFileUrl: 'https://github.com/gfazioli/mantine-rings-progress/blob/master/docs/pages/index.mdx',
  repositoryUrl: 'https://github.com/gfazioli/mantine-rings-progress',
  licenseUrl: 'https://github.com/gfazioli/mantine-rings-progress/blob/master/LICENSE',
  author: {
    name: 'Giovambattista Fazioli',
    githubUsername: 'gfazioli',
  },
};
