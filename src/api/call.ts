import client from "./client";

// Define the structure of the data and credentials
interface Credentials {
  email: string;
  password: string;
}

interface ResourceData {
  [key: string]: any;
}

interface ApiResponse<T> {
  data: T;
} 





export const createResource = async (
  endpoint: string,
  data: FormData | ResourceData
): Promise<any> => {
  try {
    const response = await client.post<ApiResponse<any>>(endpoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error creating resource at ${endpoint}:`, error);
    throw error;
  }
};
export const postData = async (
  endpoint: string,
  data: any // Replace 'any' with a more specific type if needed
): Promise<any> => {
  try {
    const response = await client.post<ApiResponse<any>>(endpoint, data, {
      headers: {
        "Content-Type": "application/json", // Corrected the typo here
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error creating resource at ${endpoint}:`, error);
    throw error;
  }
};

export const getResourceById = async (
  endpoint: string,
  id: string | number
): Promise<any> => {
  try {
    const response = await client.get<ApiResponse<any>>(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching resource with ID ${id} at ${endpoint}:`,
      error
    );
    throw error;
  }
};

export const getAllResources = async (endpoint: string): Promise<any> => {
  try {
    const response = await client.get<ApiResponse<any>>(endpoint); 
    console.log(response)
    return response.data;
  } catch (error) {
    console.error(`Error fetching resources at ${endpoint}:`, error);
    throw error;
  }
};

export const updateResource = async (
  endpoint: string,
  id: string | number,
  data: ResourceData
): Promise<any> => {
  try {
    const response = await client.put<ApiResponse<any>>(
      `${endpoint}/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Corrected the typo here
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      `Error updating resource with ID ${id} at ${endpoint}:`,
      error
    );
    throw error;
  }
};

export const deleteResource = async (
  endpoint: string,
  id: string | number
): Promise<any> => {
  try {
    const response = await client.delete<ApiResponse<any>>(`${endpoint}/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error deleting resource with ID ${id} at ${endpoint}:`,
      error
    );
    throw error;
  }
};

export const login = async (
  endpoint: string,
  credentials: Credentials
): Promise<any> => {
  try {
    const response = await client.post<ApiResponse<any>>(
      endpoint,
      credentials,
      {}
    );

    console.log("from api call success", response);
    return response.data;
  } catch (error) {
    console.error(`Error logging in at ${endpoint}:`, error);
    throw error;
  }
};
