import { Injectable } from '@angular/core';
import { ProductModel } from '../models/Product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  products: ProductModel[] = [
    {
      Image: '../assets/rtx_3060.webp',
      id: 1,
      name: 'Card màn hình MSI GeForce RTX 3060 Ventus 2X OC 12G',
      price: 15000000,
      inStock: 5,
    },

    {
      Image: '../assets/rtx_4060.webp',
      id: 2,
      name: 'Card màn hình ASUS ROG Strix GeForce RTX 4060 OC Edition 8GB GDDR6 (ROG-STRIX-RTX4060-O8G-GAMING)',
      price: 20000000,
      inStock: 7,
    },

    {
      Image: '../assets/rtx_4090_aorus.webp',
      id: 3,
      name: 'Card màn hình GIGABYTE AORUS GeForce RTX 4090 XTREME WATERFORCE 24G (GV-N4090AORUSX W-24GD)',
      price: 30000000,
      inStock: 3,
    },

    {
      Image: '../assets/rtx_4070ti.jpg',
      id: 4,
      name: 'Card màn hình MSI RTX 3080 Ti GAMING TRIO 12G ',
      price: 25000000,
      inStock: 2,
    },

    {
      Image: '../assets/rtx_4070_aero.webp',
      id: 5,
      name: 'Card màn hình MSI RTX 4070 AERO 8G OC',
      price: 18000000,
      inStock: 4,
    },

    {
      Image: '../assets/rtx_4090_matrix.jpg',
      id: 6,
      name: 'Card màn hình ASUS ROG Matrix GeForce RTX 4090 Platinum 24GB GDDR6X (ROG-MATRIX-RTX4090-P24G)',
      price: 19000000,
      inStock: 6,
    },
  ];

  cart: any[] = [];

  addToCartt(item: any) {
    console.log('Item added to cart: ', item);
  }

  addToCart(item: any) {
    let index = this.cart.findIndex(
      (product): boolean => product.id == item.id,
    );
    let indexProduct = this.products.findIndex(
      (product): boolean => product.id == item.id,
    );
    if (index == -1) {
      this.cart.push({ ...item, quantity: 1 });
    } else {
      this.cart[index].quantity += 1;
    }
    this.products[indexProduct].inStock -= 1;
  }

  removeFromCart(index: number) {
    // Xóa sp khỏi giỏ hàng
    const cartItem = this.cart[index]; // Lấy sp trong giỏ hàng

    if (cartItem.quantity > 1) {
      // Nếu số lượng > 1
      cartItem.quantity -= 1; // Giảm số lượng đi 1
    } else {
      // Nếu số lượng = 1
      this.cart.splice(index, 1); // Xóa sp đó khỏi giỏ hàng
    }

    // Tìm sp trong kho tương ứng với sp trong giỏ hàng
    const product = this.products.find((product) => product.id === cartItem.id);

    if (product) {
      product.inStock += 1; // Tăng số lượng trong kho
    }
  }

  searchProduct(search: string) {
    // Tìm kiếm sản phẩm
    return this.products.filter((product) => {
      // Lọc sản phẩm
      return product.name.toLowerCase().includes(search.toLowerCase()); // Trả về sản phẩm có tên chứa từ khóa tìm kiếm
    });
  }

  totalPrice() {
    // Tính tổng tiền
    let total = 0; // Khởi tạo biến total = 0
    this.cart.forEach((element) => {
      // Duyệt qua từng phần tử trong giỏ hàng
      total += element.price * element.quantity; // Tính tổng tiền
    });
    return total; // Trả về tổng tiền
  }

  checkOut() {
    // Thanh toán
    // Check if the cart is empty
    if (this.cart.length === 0) {
      alert('Không có sản phẩm để thanh toán');
      return; // Exit the function early
    }

    this.cart = []; // Xóa hết sp trong giỏ hàng
    this.products.forEach((element) => {
      // Duyệt qua từng phần tử trong kho
    });
    alert('Sản phẩm được thanh toán thành công '); // Thông báo thanh toán thành công
  }
}
