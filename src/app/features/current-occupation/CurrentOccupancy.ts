export interface CurrentOccupancy {
    locationType: string;
    zone: string;
    currentCapacity: number;
    maxCapacity: number;
    occupancyPercent: number;
}