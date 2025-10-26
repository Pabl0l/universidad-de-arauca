interface IProgram {
  name: string;
  slogan: string;
  description: string;
  uniqueFocus: string;
  graduateProfile: string;
  slug: string;
  icon: string;
  duration: string;
  studyPlan: any[];
}

interface IFaculty {
  name: string;
  slug: string;
  dean: string;
  slogan: string;
  description: string;
  programs: IProgram[];
  emblematicProjects?: string[];
  facilities?: string[];
  imageUrl: string;
}
