import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useNavigate } from 'react-router-dom';

LoginForm.propTypes = {
    setActive: PropTypes.func.isRequired,
}

function LoginForm({ setActive }) {
    const navigate = useNavigate() // redirect sau khi login thành công
    // 'input' có thể là email hoặc username
    const [form, setForm] = useState({ input: '', password: '' }) // chứa tất cả dữ liệu người dùng nhập.
    const [errors, setErrors] = useState({}) // object lưu các thông báo lỗi

    // Hàm xử lý thay đổi Input
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value //Dùng name của input để xác định ô nào đang thay đổi (email hay password).
        }))

        // Nếu có lỗi và người dùng gõ lại thì xóa lỗi ở trường đó
        setErrors(prevErr => ({
            ...prevErr,
            [name]: ''  // sẽ xóa lỗi cho đúng ô đang nhập
        }))
    }

    // Hàm kiểm tra dữ liệu hợp lệ. Nếu không có lỗi, sẽ trả về object rỗng.
    const validate = () => {
        const newErr = {}

        if (!form.input.trim())  // Nếu ô Email || Username rỗng
            newErr.input = 'Email or Username is required'
        if (!form.password.trim())
            newErr.password = 'Password is required'
        return newErr
    }

    // Hàm xử lý submit
    const handleSubmit = (e) => {
        e.preventDefault() // Ngăn form reload trang
        const errorFound = validate()

        // Nếu có lỗi ô input rỗng
        if (Object.keys(errorFound).length > 0) {
            setErrors(errorFound) // Lưu các lỗi này vào state errors để hiển thị lên giao diện
            return  // dừng chương trình vì lỗi
        }

        // Nếu ko có lỗi ô input rỗng -> Ktra thông tin từ localStorage
        const users = JSON.parse(localStorage.getItem('users')) ?? []

        const user = users.find(u => //Tìm user khớp email hoặc username:
            u.email === form.input || u.userName === form.input
        )

        // Nếu thông tin nhập vào sai
        if (!user) {
            setErrors({ input: 'Invalid email or username' })
            return
        }
        if (user.password !== form.password) {
            setErrors({ password: 'Incorrect password' })
            return
        }
        setErrors({})
        navigate('/') // Redirect về trang chủ
        
    }

    return (
        <div className="mt-3 px-5 pb-5 pt-2">
            <form onSubmit={handleSubmit}>
                <div className="text-center">
                    <h5 className="text-gray-700 mb-2">Sign in with:</h5>
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

                {/* Inputs */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="input">
                        Email or username
                    </label>
                    <input
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors.input ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                            }`}
                        type="text"
                        name="input"
                        value={form.input}
                        onChange={handleChange}
                    />
                    {errors.input && <p className="text-red-500 text-sm mt-1">{errors.input}</p>}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 ${errors.password ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'
                            }`}
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {/* Remember & Forgot */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                        <input
                            className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            type="checkbox"
                            id="remember"
                        />
                        <label className="text-gray-700" htmlFor="remember">
                            Remember me
                        </label>
                    </div>
                    <a href="#" className="text-blue-600 hover:underline">
                        Forgot password?
                    </a>
                </div>

                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    SIGN IN
                </button>

                <div className="flex justify-center mt-4">
                    <span className="text-gray-700">Not a member?</span>
                    <button
                        className="ml-2 text-blue-600 hover:underline focus:outline-none"
                        type="button"
                        onClick={() => setActive('register')}
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}



export default LoginForm;