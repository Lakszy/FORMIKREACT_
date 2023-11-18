import { useFormik } from "formik";
import * as Yup from "yup";

const formikConfig ={
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      agreeToTerms: false,
      appointmentDate: "",
      appointmentTime: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Must be at least 2 characters")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .min(3, "Must be at least 2 characters")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      
      age: Yup.number()
        .max(120,"Should not be greater than 120 years")
        .positive("Age must be a positive number")
        .required("Required"),
      agreeToTerms: Yup.boolean().oneOf(
        [true],
        "Must agree to terms and conditions"
      ),
      appointmentDate: Yup.date().required("Required"),
      appointmentTime: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values,null, 2));
    },
  };
  export default formikConfig;