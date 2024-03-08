import { useState, useRef, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { User } from '@/app/users/data'; // Thay đổi đường dẫn đến file dữ liệu người dùng

interface ModalProps {
   user?: User; // Dữ liệu người dùng tùy chọn để hiển thị trong modal
   isOpen: boolean; // Biến trạng thái để kiểm soát hiển thị modal
   onClose: () => void; // Hàm xử lý khi đóng modal
}

const UserModal: React.FC<ModalProps> = ({ user, isOpen, onClose }) => {
   // Sử dụng useRef để ngăn chặn render lại không cần thiết và duy trì focus
   const modalRef = useRef<HTMLDivElement>(null);

   // Xử lý sự kiện click bên ngoài để đóng modal
   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (modalRef.current && !modalRef.current.contains(event.target as HTMLElement)) {
            onClose();
         }
      };

      document.addEventListener('click', handleClickOutside);

      return () => document.removeEventListener('click', handleClickOutside);
   }, [isOpen, onClose]);

   return (
      <Transition show={isOpen} as="div" className="fixed inset-0 z-50 overflow-hidden">
         <Dialog
            as="div"
            className="fixed inset-0 flex items-center justify-center"
            onClose={onClose}
         >
            <div
               ref={modalRef}
               className="bg-white p-4 w-full max-w-2xl rounded-lg shadow-sm backdrop-blur-sm"
            >
               {/* Nội dung modal */}
               <>
                  <div className="flex flex-col items-center space-y-4">
                           
                     <div className="w-32 h-32 rounded-full overflow-hidden mx-auto">
                        <img
                           src={'/image/placeholder.jpg'}
                           alt="Avatar"
                           className="w-full h-full object-cover"
                        />
                     </div>
                     <h2 className="text-xl font-medium">Vy</h2>
                     <p className="text-gray-500">vi2002@gmail.com</p>
                     <ul className="flex flex-col space-y-2 text-gray-700">
                        <li>
                           <span className="font-bold">Giới tính:</span> Nam
                        </li>
                        <li>
                           <span className="font-bold">Ngày sinh:</span> 09/06/2002
                        </li>
                        <li>
                           <span className="font-bold">Điện thoại:</span> 0387575502
                        </li>
                     </ul>
                  </div>
                  <button onClick={onClose} className="btn btn-outline">
                     Đóng
                  </button>
               </>
            </div>
         </Dialog>
      </Transition>
   );
};

export default UserModal;
