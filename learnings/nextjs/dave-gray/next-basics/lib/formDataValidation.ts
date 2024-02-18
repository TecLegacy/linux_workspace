import { zfd } from 'zod-form-data';

export const formSchema = zfd.formData({
  name: zfd.text(),
  email: zfd.text(),
  message: zfd.text(),
});
