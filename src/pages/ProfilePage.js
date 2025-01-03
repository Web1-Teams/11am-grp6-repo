import React, { useState } from "react";
import "../components/profilePage/main.css";
import UserCard from "../components/profilePage/UserCard";
import ManageProfileModal from "../components/profilePage/ManageProfileModal";
import ChangePasswordModal from "../components/profilePage/ChangePasswordModal";
import UserInfo from "../components/profilePage/UserInfo";
import myImage from "../components/profilePage/pic/pic.jpg";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const ProfilePage = ({ places }) => {
  const [userName, setUserName] = useState("Hamza Zarour");
  const [profileImage, setProfileImage] = useState(myImage);
  const [email, setEmail] = useState("hamzazarour@gmail.com");
  const [phone, setPhone] = useState("+970569022005");
  const [location, setLocation] = useState("Nablus, Rafidia.");

  //=======================================================================================================
  // الحالة المؤقتة للايميل،بنستعملها اثناء عملية التغيير  :setTemporaryEmail
  // اثناء ما بكون المستخدم بدخل الايميل الجديد يعني قبل ما نقرر حفظه او لاء
  // هذه الحالة تستخدم لتخزين الايميل الجديد قبل حفظه.
  //email بنطبق عليها شروط الفاليديشن واذا نجحت وقتها بنخزنها داخل
  // باستخدام setEmail(temporaryEmail);
  //بنفس هذا اللوجيك تم تطبيق جميع ازرار التعديل مع اختلافات الفاليديشن وبعض التفاصيل الصغيرة

  const [temporaryEmail, setTemporaryEmail] = useState(email);
  const [temporaryPhone, setTemporaryPhone] = useState(phone);
  const [temporaryLocation, setTemporaryLocation] = useState(location);
  const [temporaryUserName, setTemporaryUserName] = useState(userName);
  const [temporaryProfileImage, setTemporaryProfileImage] =
    useState(profileImage);
  //=======================================================================================================
  const isValidUserName = (name) => {
    return name.trim().length > 0;
  };
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const isValidPhone = (phone) => {
    const phonePattern = /^\+?\d{7,15}$/;
    return phonePattern.test(phone);
  };
  const isValidLocation = (location) => {
    // إزالة المسافات الزائدة في البداية والنهاية
    location = location.trim();

    // التأكد من أن النص لا يبدأ برقم
    const doesNotStartWithNumber = /^[^\d]/.test(location);

    // التأكد من أن النص ليس كلّه أرقام
    const notAllNumbers = /\D/.test(location);

    return doesNotStartWithNumber && notAllNumbers;
  };
  //=======================================================================================================
  // دالة تغيير الاسم
  const handleSaveProfile = () => {
    if (!temporaryUserName.trim()) {
      toast.error("The Name field cannot be left empty.");
      return;
    }

    if (!isValidUserName(temporaryUserName)) {
      toast.error("Please enter a valid name.");
      return;
    }

    setUserName(temporaryUserName);
    setProfileImage(temporaryProfileImage);
    toast.success("The Profile has been successfully updated!");

    // إغلاق المودل
    const modalElement = document.getElementById("manageProfileModal");
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
  };

  // دالة تغيير الصورة الشخصية
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // يمكنك إضافة امور إضافية هنا مثل رفع الصورة إلى اللوكل ستورج
      const reader = new FileReader();
      reader.onloadend = () => {
        setTemporaryProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // دالة حفظ كلمة المرور
  const handleSavePassword = () => {
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!newPassword || !confirmPassword) {
      toast.error("Please fill in both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    //newPassword يمكنك إضافة امور إضافية هنا مثل رفع الباسوورد إلى اللوكل ستورج عن طريق انك تجيب
    // او confirmPassword
    //وبكون فيهم الباسوورد الجاهزة للتغيير واللي تجاوزت الشروط بنجاح
    toast.success("Password has been successfully updated!");

    // إغلاق المودال
    const modalElement = document.getElementById("changePasswordModal");
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }

    // إعادة تعيين حقول الإدخال للفراغ بعد ما خلصنا
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmPassword").value = "";
  };

  // دالة حفظ الايميل
  const handleSaveEmail = () => {
    if (!temporaryEmail.trim()) {
      toast.error("The Email field cannot be left empty.");
      return;
    }

    if (!isValidEmail(temporaryEmail)) {
      toast.error("Please enter a valid email.");
      return;
    }

    // تحديث الايميل بنجاح
    setEmail(temporaryEmail);
    toast.success("The Email has been successfully updated!");

    // إغلاق المودل فقط في حالة تغيير الايميل بنجاح
    const modalElement = document.getElementById("editEmailModal");
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
  };

  // دالة حفظ رقم التلفون
  const handleSavePhone = () => {
    if (!temporaryPhone.trim()) {
      toast.error("The Phone field cannot be left empty.");
      return;
    }

    if (!isValidPhone(temporaryPhone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    setPhone(temporaryPhone);
    toast.success("The Phone number has been successfully updated!");

    // إغلاق المودال
    const modalElement = document.getElementById("editPhoneModal");
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
  };

  // دالة حفظ اللوكيشن
  const handleSaveLocation = () => {
    if (!temporaryLocation.trim()) {
      toast.error("The Location field cannot be left empty.");
      return;
    }

    if (!isValidLocation(temporaryLocation)) {
      toast.error("Please enter a valid location.");
      return;
    }

    setLocation(temporaryLocation);
    toast.success("The Location has been successfully updated!");

    // إغلاق المودال
    const modalElement = document.getElementById("editLocationModal");
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
  };

  //=======================================================================================================

  return (
    <div className="main-container">
      <UserCard name={userName} profileImage={profileImage} />

      <ManageProfileModal
        userName={userName}
        profilePicture={profileImage}
        onSaveProfile={handleSaveProfile}
        onPictureChange={handlePictureChange}
        temporaryUserName={temporaryUserName}
        setTemporaryUserName={setTemporaryUserName}
      />

      <ChangePasswordModal onSavePassword={handleSavePassword} />

      <div className="flex-grow-1">
        <UserInfo
          places={places}
          email={email}
          temporaryEmail={temporaryEmail}
          setTemporaryEmail={setTemporaryEmail}
          handleSaveEmail={handleSaveEmail}
          phone={phone} // بنمررله رقم التلفون
          temporaryPhone={temporaryPhone} // بنمررله رقم التلفون المؤقت
          setTemporaryPhone={setTemporaryPhone} // setTemporaryPhone بنمررله دالة
          handleSavePhone={handleSavePhone} //  handleSavePhone بنمررله دالة حفظ رقم التلفون
          location={location}
          temporaryLocation={temporaryLocation}
          setTemporaryLocation={setTemporaryLocation}
          handleSaveLocation={handleSaveLocation}
        />
        <Toaster position="bottom-right" />
      </div>
    </div>
  );
};

export default ProfilePage;
