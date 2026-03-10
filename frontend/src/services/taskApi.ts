import axios from 'axios'

export interface TaskItem {
  id: number
  title: string
  description?: string
  isCompleted: boolean
  createdAt: string
  dueDate?: string
}

export interface CreateTaskDto {
  title: string
  description?: string
  dueDate?: string
}

export interface UpdateTaskDto {
  title?: string
  description?: string
  isCompleted?: boolean
  dueDate?: string
}

const API_BASE_URL = '/api/tasks'

const apiClient = axios.create({
  baseURL: API_BASE_URL,
})

export const taskApi = {
  getTasks: async (): Promise<TaskItem[]> => {
    const response = await apiClient.get<TaskItem[]>()
    return response.data
  },

  getTask: async (id: number): Promise<TaskItem> => {
    const response = await apiClient.get<TaskItem>(`/${id}`)
    return response.data
  },

  createTask: async (task: CreateTaskDto): Promise<TaskItem> => {
    const response = await apiClient.post<TaskItem>('', task)
    return response.data
  },

  updateTask: async (id: number, task: UpdateTaskDto): Promise<void> => {
    await apiClient.put(`/${id}`, task)
  },

  deleteTask: async (id: number): Promise<void> => {
    await apiClient.delete(`/${id}`)
  },
}
