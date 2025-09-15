"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useForm } from "react-hook-form";

import Input from '@/common/components/input';
import Select from '@/common/components/select';
import Textarea from '@/common/components/textarea';
import Button from '@/common/components/button';

import {
    integrationCategoriesIcon1,
    integrationCategoriesIcon2,
    integrationCategoriesIcon3,
    integrationCategoriesIcon4,
    integrationCategoriesIcon5,
} from '@/common/assets/images';
import { countries } from '../contact-us/countries-consts';

interface FormValues {
    name: string;
    lastName: string;
    email: string;
    phone?: string;
    company: string;
    title: string;
    country?: string;
    message?: string;
    terms: boolean;
}

function IntegrationForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ mode: 'onBlur' });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data: FormValues) => {
        console.log("Form Data:", data);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 4000);
    };

    const categories = [
        {
            title: 'Access Control',
            description: 'Door locks, card readers, biometric systems',
            icon: integrationCategoriesIcon1,
        },
        {
            title: 'Intrusion Detection',
            description: 'Motion sensors, door/window sensors, alarms',
            icon: integrationCategoriesIcon2,
        },
        {
            title: 'Fire Safety',
            description: 'Fire alarms, smoke detectors, suppression systems',
            icon: integrationCategoriesIcon3,
        },
        {
            title: 'CCTV & Surveillance',
            description: 'IP cameras, NVRs, video analytics',
            icon: integrationCategoriesIcon4,
        },
        {
            title: 'Other Security Solutions',
            description: 'IoT devices, smart home integration, custom solutions',
            icon: integrationCategoriesIcon5,
        },
    ];

    return (
        <div>
            <div className='container'>
                {isSubmitted && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md w-full">
                            <h3 className="text-xl font-bold text-[#134E4A] mb-2">Application Submitted!</h3>
                            <p className="text-gray-700 mt-5">Thank you for your submission. We ll get back to you soon.</p>
                        </div>
                    </div>
                )}

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='border border-[#3CB097] rounded-[20px] px-6 lg:px-10 py-6 lg:py-10 mt-[54px] lg:mt-[50px] mb-6 lg:mb-20'
                >
                    {/* Personal Info */}
                    <div>
                        <h2 className='text-xl lg:text-2xl font-extrabold ff_telegraf text-[#1F1F1F]'>Personal Information</h2>
                        <p className='text-base lg:text-lg mt-2 text-[#101828]'>Tell us about yourself and your role</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8 mt-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    First Name <span className="text-[#D12A2A]">*</span>
                                </label>
                                <Input
                                    id="name"
                                    placeholder="First name"
                                    {...register("name", { required: "First name is required" })}
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name <span className="text-[#D12A2A]">*</span>
                                </label>
                                <Input
                                    id="last-name"
                                    placeholder="Last name"
                                    {...register("lastName", { required: "Last name is required" })}
                                />
                                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8 mt-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address <span className="text-[#D12A2A]">*</span>
                                </label>
                                <Input
                                    id="email"
                                    placeholder="Email Address"
                                    type="email"
                                    {...register("email", { required: "Email is required" })}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            <div>
                                <Input
                                    label="Phone Number"
                                    id="phone-number"
                                    placeholder="Phone Number"
                                    type="tel"
                                    {...register("phone")}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className='mt-8'>
                        <h2 className='text-xl lg:text-2xl font-extrabold ff_telegraf text-[#1F1F1F]'>Company Information</h2>
                        <p className='text-base lg:text-lg mt-2 text-[#101828]'>Details about your organization</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-8 mt-6 mb-2 lg:mb-6">
                            <div>
                                <label htmlFor="company-name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Company Name <span className="text-[#D12A2A]">*</span>
                                </label>
                                <Input
                                    id="company-name"
                                    placeholder="Company Name"
                                    {...register("company", { required: "Company name is required" })}
                                />
                                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                    Title <span className="text-[#D12A2A]">*</span>
                                </label>
                                <Select
                                    id="title"
                                    placeholder="e.g. CEO, Purchase Manager"
                                    options={[
                                        { label: "CEO/Managing Director", value: "ceo" },
                                        { label: "Operations Manager", value: "marketing_manager" },
                                        { label: "Purchasing Manager/Procurement", value: "purchasing_manager" },
                                        { label: "Sales & Business Development", value: "sales_dept" },
                                        { label: "Technical Manager / Engineer", value: "project_manager" },
                                        { label: "Project Manager", value: "business_development_manager" },
                                        { label: "IT & Security Manager", value: "IT_&_Security_Manager" },
                                        { label: "Other", value: "other" },

                                    ]}
                                    {...register("title", { required: "Title is required" })}
                                />
                                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                            </div>
                        </div>

                        <Select
                            label="Country"
                            id="country"
                            placeholder="Select Country"
                            options={countries}
                            {...register("country")}
                        />
                    </div>

                    {/* Integration Categories */}
                    <div className='mt-8'>
                        <h2 className='text-xl lg:text-2xl font-extrabold ff_telegraf text-[#1F1F1F]'>Integration Categories</h2>
                        <p className='text-base lg:text-lg mt-1.5 text-[#101828]'>Select all categories that apply to your products or services (multiple selections allowed)</p>

                        <div className="grid gap-5 mt-6">
                            {categories.map((category, index) => (
                                <label
                                    key={index}
                                    htmlFor={`category-${index}`}
                                    className="flex items-center justify-between w-full cursor-pointer bg-white rounded-2xl p-3 lg:p-6 transition-all"
                                    style={{
                                        border: '1px solid #F3F3F5',
                                        boxShadow: '0px 3px 13px 0px #0000000A',
                                    }}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-[#134E4A] text-white rounded-full p-3">
                                            <Image
                                                src={category.icon}
                                                alt={category.title}
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-extrabold text-[#101828] text-lg ff_telegraf">{category.title}</h4>
                                            <p className="text-sm text-[#101828] mt-2">{category.description}</p>
                                        </div>
                                    </div>
                                    <input
                                        type="checkbox"
                                        id={`category-${index}`}
                                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-0"
                                    />
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className='mt-8'>
                        <h2 className='text-xl lg:text-2xl font-extrabold ff_telegraf text-[#1F1F1F]'>Additional Information</h2>
                        <p className='text-base lg:text-lg mt-2 text-[#101828] mb-6'>Help us understand your integration needs</p>
                        <Textarea
                            label="Tell us about your integration requirements"
                            id="message"
                            placeholder="Write your message here"
                            {...register("message")}
                        />
                    </div>

                    {/* Terms */}
                    <label className="flex items-start space-x-2 text-base font-light text-[#101828] cursor-pointer mt-8">
                        <input
                            type="checkbox"
                            {...register("terms", { required: "You must agree to continue" })}
                            className="mt-1 h-4 w-4 rounded-full border-[#D0D5DD] text-blue-600 focus:ring-blue-500"
                        />
                        <span>I agree to the Terms of Service and Privacy Policy, and consent to being contacted about partnership opportunities.</span>
                    </label>
                    {errors.terms && (
                        <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
                    )}

                    <Button type='submit' buttonClassName='!py-[12px] !px-[16px] bg-[#005143] mt-8' text='Submit Partnership Application' />
                </form>
            </div>
        </div>
    );
}

export default IntegrationForm;