"use client";
import React from "react";
import { useFormik } from "formik";
import formikConfig from "./components/formikConfig";

export default function Home() {
  const formik = useFormik(formikConfig);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="bg-purple-200 p-10 m-10 rounded-md "
    >
      <div className="flex">
        <div className="flex-1 mr-4">
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-gray-600"
          >
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-600">{formik.errors.firstName}</div>
          ) : null}
        </div>

        <div className="flex-1">
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-gray-600"
          >
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-600">{formik.errors.lastName}</div>
          ) : null}
        </div>
      </div>
      <div className="flex">
        <div className="flex-1 mr-4">
          <label
            htmlFor="appointmentDate"
            className="block mt-4 text-sm font-semibold text-gray-600"
          >
            Appointment Date
          </label>
          <input
            id="appointmentDate"
            name="appointmentDate"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.appointmentDate}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {formik.touched.appointmentDate && formik.errors.appointmentDate ? (
            <div className="text-red-600">{formik.errors.appointmentDate}</div>
          ) : null}
        </div>
        <div className="flex-1">
          <label
            htmlFor="appointmentTime"
            className="block mt-4 text-sm font-semibold text-gray-600"
          >
            Appointment Time
          </label>
          <input
            id="appointmentTime"
            name="appointmentTime"
            type="time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.appointmentTime}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {formik.touched.appointmentTime && formik.errors.appointmentTime ? (
            <div className="text-red-600">{formik.errors.appointmentTime}</div>
          ) : null}
        </div>
      </div>
      <label
        htmlFor="email"
        className="block mt-4 text-sm font-semibold text-gray-6"
      >
        Email Address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="mt-1 p-2 w-full border rounded-"
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-600">{formik.errors.email}</div>
      ) : null}
      <label
        htmlFor="age"
        className="block mt-4 text-sm font-semibold text-gray-600"
      >
        Age
      </label>
      <input
        id="age"
        name="age"
        type="number"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age}
        className="mt-1 p-2 w-full border rounded-"
      />
      {formik.touched.age && formik.errors.age ? (
        <div className="text-red-600">{formik.errors.age}</div>
      ) : null}
      <div className="mt-4">
        <label className="block text-sm font-semibold text-gray-600">
          Gender
        </label>
        <div className="flex">
          <label className="mr-2">
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={formik.handleChange}
              checked={formik.values.gender === "male"}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={formik.handleChange}
              checked={formik.values.gender === "female"}
            />
            Female
          </label>
        </div>
      </div>
      <div className="mt-4">
        <input
          id="agreeToTerms"
          name="agreeToTerms"
          type="checkbox"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.agreeToTerms}
          className="mr-2"
        />
        <label
          htmlFor="agreeToTerms"
          className="text-sm font-semibold text-gray-60"
        >
          I agree to the terms and conditions
        </label>
        {formik.touched.agreeToTerms && formik.errors.agreeToTerms ? (
          <div className="text-red-600">{formik.errors.agreeToTerms}</div>
        ) : null}
      </div>
      <button
        type="submit"
        className="mt-4 bg-purple-600 text-white p-2 rounded-md hover:bg-purple-8"
      >
        Submit
      </button>
    </form>
  );
}
