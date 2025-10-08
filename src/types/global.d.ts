interface IProgram {
  name: string;
  slogan: string;
  description: string;
  uniqueFocus: string;
  graduateProfile: string;
}

interface IFaculty {
  name: string;
  dean: string;
  slogan: string;
  description: string;
  programs: IProgram[];
  emblematicProjects?: string[];
  facilities?: string[];
}
