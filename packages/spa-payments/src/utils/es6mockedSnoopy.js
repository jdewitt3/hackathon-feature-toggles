import { authenticateUser } from "./clientMethods";

// api.operations[tag][operationId].execute(parameters),

const tasks = [];

class Snoopy {
  operations = {
    Task: {
      createTask: {
        execute: task => {
          tasks.push(task);
          return Promise.resolve({ message: "Task successfully created." });
        },
        method: "string",
        path: "string"
      },
      getAllTask: {
        execute: () => Promise.resolve(tasks),
        method: "string",
        path: "string"
      }
    },
    Authentication: {
      submitLogin: {
        execute: authenticateUser,
        method: "POST",
        path: "http://localhost:8090/v3/oauth/token"
      }
    }
  };
}

const apiClient = new Snoopy();

export default apiClient;
