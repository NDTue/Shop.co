import React, { createContext, useContext, useState } from 'react'

// Tạo context để lưu thông tin giỏ hàng
const CartContext = createContext()

// Custom hook để truy cập context dễ dàng ở các component khác
export const useCart = () => useContext(CartContext)

// Provider để bọc toàn bộ ứng dụng => cung cấp context cho tất cả component con
export const CartProvider = ({ children }) => {
    // State lưu danh sách sản phẩm đã thêm vào giỏ hàng
    const [cartItems, setCartItems] = useState([])

    // Hàm thêm sản phẩm vào giỏ hàng với số lượng tùy chỉnh
    const addToCart = (product, quantityToAdd = 1) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id)

            // Nếu sản phẩm đã có trong giỏ => tăng quantity theo số lượng được chọn
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
                )
            } else {
                // Nếu sản phẩm chưa có => thêm mới với quantity = số lượng được chọn
                return [...prevItems, { ...product, quantity: quantityToAdd }]
            }
        })
    }

    // Hàm cập nhật số lượng sản phẩm trong giỏ hàng
    const updateQuantity = (productId, newQuantity) => {
        // Chỉ cập nhật khi số lượng lớn hơn 0
        if (newQuantity > 0) {
            setCartItems(prevItems =>
                prevItems.map(item =>
                    item.id === productId ? { ...item, quantity: newQuantity } : item
                )
            )
        }
    }

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
    }

    // Tổng số lượng sản phẩm trong giỏ
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    // Tính tổng tiền của giỏ hàng
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

    // Phí giao hàng
    const deliveryFee = subtotal > 0 ? 15 : 0

    // Tổng cộng
    const total = subtotal + deliveryFee

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            updateQuantity,
            removeFromCart,
            totalQuantity,
            subtotal,
            deliveryFee,
            total
        }}>
            {children}
        </CartContext.Provider>
    )
}