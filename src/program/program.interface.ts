
export interface ProgramInterface{
    _id: string;
    name: string;
    level: 'undergraduate' | 'masters' | 'phd';
    institute: string;
    country: string; // 2 characters long eg 'NG' | 'US'
    description: string;
}