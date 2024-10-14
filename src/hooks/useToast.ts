import { toast } from 'sonner'

interface ToastProps {
  title: string
}

export const useToast = () => {
  const errorToast = ({ title }: ToastProps) => {
    toast.error(title)
  }

  return {
    errorToast
  }
}
