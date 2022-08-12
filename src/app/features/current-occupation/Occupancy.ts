export interface Occupancy {
    id: number;
    location: string;
    zone: string;
    currentOccupancy: number;
    maxOccupancy: number;
    percentageOfOccupancy: string;
}