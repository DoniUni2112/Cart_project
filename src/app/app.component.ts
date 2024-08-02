import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first_project';

  products = [
    {
      Image: "../assets/rtx_3060.webp",
      id: 1,
      name: "Card màn hình MSI GeForce RTX 3060 Ventus 2X OC 12G",
      price: 15000000,
      inStock: 5
    },

    {
      Image: "../assets/rtx_4060.webp",
      id: 2,
      name: "Card màn hình ASUS ROG Strix GeForce RTX 4060 OC Edition 8GB GDDR6 (ROG-STRIX-RTX4060-O8G-GAMING)",
      price: 20000000,
      inStock: 7
    },

    {
      Image: "../assets/rtx_4090_aorus.webp",
      id: 3,
      name: "Card màn hình GIGABYTE AORUS GeForce RTX 4090 XTREME WATERFORCE 24G (GV-N4090AORUSX W-24GD)",
      price: 30000000,
      inStock: 3
    },

    {
      Image: "../assets/rtx_4070ti.jpg",
      id: 4,
      name: "Card màn hình MSI RTX 3080 Ti GAMING TRIO 12G",
      price: 25000000,
      inStock: 2
    },

    {
      Image: "../assets/rtx_4070_aero.webp",
      id: 5,
      name: "Card màn hình GIGABYTE GeForce RTX 4070 AERO OC V2 12GB (GV-N4070AERO OCV2-12GD)",
      price: 18000000,
      inStock: 10
    },

    {
      Image: "../assets/rtx_4090_matrix.jpg",
      id: 6,
      name: "Card màn hình ASUS ROG Matrix GeForce RTX 4090 Platinum 24GB GDDR6X",
      price: 98990000,
      inStock: 1
    }
  ]


  cart: any[] = [];

  addToCart(index: number) { // Thêm sp vào giỏ hàng
    let findIndex = this.cart.findIndex((element) => {
      return element.id == this.products[index].id;
    }); // Đi tìm trong giỏ hàng có tồn tại sp mà mình muốn thêm hay không
    if (findIndex != -1) {// Nếu tồn tại (index != -1)
      this.cart[findIndex].quantity += 1; // Tăng số lượng lên 1
      if(this.products[index].inStock <= 0){ // Nếu số lượng trong kho = 0
        return;  // Thoát khỏi hàm
      }else{ // Nếu số lượng trong kho > 0
        this.products[index].inStock--; // Giảm số lượng trong kho
      } // Tăng số lượng lên 1
    } else {// Nếu không tồn tại
      this.cart.push({// Thêm sp mới đó vào
        Image: this.products[index].Image, // Ảnh = ảnh của sp đó
        id: this.products[index].id, // ID = ID của sp đó
        name: this.products[index].name, // Tên = tên của sp đó
        price: this.products[index].price, // Giá = giá của sp đó
        quantity: 1, // Số lượng = 1
      });
      this.products[index].inStock--; // Giảm số lượng trong kho
    }
    console.log(this.cart);
  }

  // Logic nay bi loi
  // removeFromCart(index: number) { // Xóa sp khỏi giỏ hàng
  //   if (this.cart[index].quantity > 1) { // Nếu số lượng > 1
  //     this.cart[index].quantity -= 1; // Giảm số lượng đi 1
  //   } else {  // Nếu số lượng = 1
  //     this.cart.splice(index, 1); // Xóa sp đó khỏi giỏ hàng
  //     this.cart[index].quantity += 1; //  Tăng số lượng trong kho
  //   }
  // }

//   removeFromCart(index: number) { // Xóa sp khỏi giỏ hàng
//     if (this.cart[index].quantity > 1) { // Nếu số lượng > 1
//         this.cart[index].quantity -= 1; // Giảm số lượng đi 1
//     } else {  // Nếu số lượng = 1
//         // Tìm sp trong kho tương ứng với sp trong giỏ hàng
//         const product = this.products.find(product => product.id === this.cart[index].id);
        
//         if (product) {
//             product.inStock += 1; // Tăng số lượng trong kho
//         }
        
//         this.cart.splice(index, 1); // Xóa sp đó khỏi giỏ hàng
//     }
// }

removeFromCart(index: number) { // Xóa sp khỏi giỏ hàng
  const cartItem = this.cart[index]; // Lấy sp trong giỏ hàng

  if (cartItem.quantity > 1) { // Nếu số lượng > 1
      cartItem.quantity -= 1; // Giảm số lượng đi 1
  } else {  // Nếu số lượng = 1
      this.cart.splice(index, 1); // Xóa sp đó khỏi giỏ hàng
  }

  // Tìm sp trong kho tương ứng với sp trong giỏ hàng
  const product = this.products.find(product => product.id === cartItem.id);

  if (product) {
      product.inStock += 1; // Tăng số lượng trong kho
  }
}



  totalPrice() { // Tính tổng tiền
    let total = 0; // Khởi tạo biến total = 0
    this.cart.forEach((element) => { // Duyệt qua từng phần tử trong giỏ hàng
      total += element.price * element.quantity; // Tính tổng tiền
    });
    return total; // Trả về tổng tiền
  }

  checkOut() { // Thanh toán
    // Check if the cart is empty
    if (this.cart.length === 0) {
      alert("Không có sản phẩm để thanh toán");
      return; // Exit the function early
  }

    this.cart = []; // Xóa hết sp trong giỏ hàng
    this.products.forEach((element) => { // Duyệt qua từng phần tử trong kho
      
    });
    alert("Sản phẩm được thanh toán thành công "); // Thông báo thanh toán thành công
  }
}
