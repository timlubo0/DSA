class Database{
    private static instance: Database;

    private constructor() {
        Database.instance = 'this instance cant change';
    }

    public static getInstance(): Database{
        return Database.instance;
    }
}