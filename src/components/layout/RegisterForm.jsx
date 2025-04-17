import React, { useState } from 'react';
import PropTypes from 'prop-types';

RegisterForm.propTypes = {
    setActive: PropTypes.func.isRequired,
}

function RegisterForm({ setActive }) {
    // chứa tất cả dữ liệu người dùng nhập.
    const [form, setForm] = useState({ // truyền vào name của các input và label
        name: '', userName: '', email: '',
        password: '', repeatPassword: '', agree: false,
    })
    const [errors, setErrors] = useState({}) // object lưu các thông báo lỗi


    // Hàm kiểm tra dữ liệu hợp lệ
    const validate = () => {
        const newErr = {}

        // Danh sách các trường bắt buộc
        const requireField = ['name', 'userName', 'email', 'password', 'repeatPassword']
        requireField.map(field => {
            if (!form[field].trim()) // Nếu chuỗi rỗng tại mỗi ô input
                newErr[field] = 'This field is required'
        })

        if (form.password !== form.repeatPassword)
            newErr.repeatPassword = 'Password does not match'
        if (!form.agree) // kiểm tra đã check agree chưa
            newErr.agree = 'You must agree to the terms'

        return newErr
    }

    // Hàm xử lý thay đổi Input
    const handleChange = (e) => { // 'checked' dành riêng cho checkbox (true/false)
        const { name, value, type, checked } = e.target
        setForm(prev => ({
            ...prev,
            // Nếu là checkbox, thì lấy checked (true/false)
            [name]: type === 'checkbox' ? checked : value
        }))

        setErrors(prevErr => ({
            ...prevErr,
            [name]: ''
        }))
    }

    // Hàm xử lý Submit
    const handleSubmit = (e) => {
        e.preventDefault() // Ngăn form reload trang

        const errorFound = validate() // Kiểm tra các lỗi

        // Nếu có lỗi (tức là errorFound không rỗng)
        if (Object.keys(errorFound).length > 0) {
            setErrors(errorFound) // Lưu các lỗi này vào state errors để hiển thị lên giao diện
            return  // Dừng lại, không thực hiện các bước tiếp theo (vì form đang bị lỗi)
        }

        setErrors({}) // Nếu hết lỗi hoặc không có lỗi -> Xóa lỗi cũ

        // Lấy danh sách users từ localStorage (nếu chưa có thì dùng mảng rỗng [])
        const users = JSON.parse(localStorage.getItem('users')) ?? []

        // Kiểm tra email hoặc username đã tồn tại chưa
        const isEmailExist = users.some(user => user.email === form.email)
        const isUserNameExist = users.some(user => user.userName === form.userName)
        if (isEmailExist || isUserNameExist) {
            const existError = {}
            if (isEmailExist) existError.email = 'Email already exists'
            if (isUserNameExist) existError.userName = 'User Name already exists'
            setErrors(existError) // Cập nhật lỗi vào state
            return // Dừng chương trình khi bị lỗi
        }


        // Nếu ko lỗi -> Thêm người dùng mới vào danh sách
        users.push({
            name: form.name,
            userName: form.userName,
            email: form.email,
            password: form.password,
        })

        // Lưu danh sách users mới vào localStorage
        localStorage.setItem('users', JSON.stringify(users))
        alert("Register successful!");

        // Set lại form sau khi đky thành công
        setForm({ name: '', userName: '', email: '', password: '', repeatPassword: '', agree: false })
        setActive('login')
    }

    return (
        <div className="mt-3 px-5 pb-5 pt-2">
            <form onSubmit={handleSubmit}>  {/* Xử lý form khi submit */}
                <div className="text-center">
                    <h5 className="text-gray-700 mb-2">Sign up with:</h5>
                    {/* Social List */}
                    <div className="flex justify-center space-x-4 mb-4">
                        {['facebook', 'google', 'x-twitter', 'github'].map((icon) => (
                            <button
                                key={icon}
                                type="button"
                                className="w-10 h-10 border-0 rounded-full bg-white 
                        transition-colors duration-300 ease hover:bg-[#404247] hover:text-white mx-1"
                            >
                                <i className={`fa-brands fa-${icon}`}></i>
                            </button>
                        ))}
                    </div>
                    <h5 className="text-gray-700">or:</h5>
                </div>

                {/* Input fields */}
                {['name', 'userName', 'email', 'password', 'repeatPassword'].map((field) => (
                    <div key={field} className="mb-4">
                        <label className="block text-gray-700 mb-2 capitalize">
                            {field === 'repeatPassword' ? 'Confirm password' : field}
                        </label>
                        <input
                            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors[field] ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                                }`}
                            type={field.includes('password') ? 'password' : 'text'}
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                        />
                        {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
                    </div>
                ))}

                <div className="mb-4">
                    <div className="flex items-center justify-center">
                        <input
                            className={`mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 ${errors.agree ? 'border-red-500' : 'border-gray-300'
                                } rounded`}
                            type="checkbox"
                            name="agree"
                            checked={form.agree}
                            onChange={handleChange}
                        />
                        <label className="text-gray-700">I have read and agree to the terms</label>
                    </div>
                    {errors.agree && <p className="text-red-500 text-sm mt-1">{errors.agree}</p>}
                </div>

                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    SIGN UP
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;