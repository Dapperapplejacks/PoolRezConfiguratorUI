export class Configuration {
    public PreferredDateTimes: PreferredDateTime[] = []
}

export class PreferredDateTime{
    public DayOfWeek: string = "";
    public PreferredTimes: string[] = [];
}