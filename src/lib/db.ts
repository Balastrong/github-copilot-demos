type DatabaseClient = {
  query: (query: string, ...params: any[]) => Promise<any>;
};

export const getDatabaseClient = (): DatabaseClient => {
  return {
    query: async (query: string, ...params: any[]) => {
      console.log("Executing query:", query, params);
      return Promise.resolve({ data: "mocked data" });
    },
  };
};
