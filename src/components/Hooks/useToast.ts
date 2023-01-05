import toast from 'react-hot-toast';

const useToast = () => ({
    successToast: (message: string) => toast.success(message),
    errorToast: (message: string) => toast.error(message)
  });

export default useToast;
