import { Button, PasswordInput, PinInput, TextInput } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import { changePass, loginUser, sendOTP, verifyOTP } from "../services/UserService";
import { notifications } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";


const form = {
  email: "",
  password: "",
};

export const ForgetPassword = ({ formEmail = "" }: any) => {
  const [formData, setFormData] = useState(form);
  const [loading, setLoading] = useState(false)
  const [enablePas, setEnablePas] = useState(false);
  const [otpVis, setOtpVis] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  
  

  useEffect(() => {
    setFormData((prev) => ({ ...prev, email: formEmail }));
  }, [formEmail]);

  const handlesendotp = async () => {
    setLoading(true)
    notifications.show({
                          title: 'Sending OTP',
                          message: ``,
                          color: 'yellow',
                          loading:loading,
                        });
    const res = await sendOTP(formData.email);
    if (!res.ok) {
      console.log(res, res.json());
      throw new Error("OTP sending Failed 🔴");
    }
    setLoading(false)
    notifications.show({
                          title: 'OTP sent',
                          message: `please check your mail and verify`,
                          color: 'green',
                          loading:loading,
                        });
    setOtpVis(true);
    console.log("otp sent bro");
  };

  const handleVerifyOtp = async () => {
    const res = await verifyOTP(formData.email, otp);
    if (!res.ok) {
      console.log(res);
      throw new Error(`${res.json()}`);
    }
    const data = await res.json();
    console.log(data)
    setEnablePas(true);
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };
  
  const handleChangePass = async () => {
    const res = await changePass(formData);
    if(res.ok){
        notifications.show({
                          title: 'Password Changed Successful',
                          message: `Your password has been updated`,
                          color: 'green',
                        });
        
    }
    setFormData({...formData, email:"",password:""})
    navigate("/sign-in")
    
  };

  return (
    <div className="flex flex-col justify-center place-content-center items-center h-screen">
        <div className="flex flex-col gap-4">
      <div>Reset password</div>
      <TextInput
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.currentTarget.value })}
        withAsterisk
        label="Email"
        placeholder=""
      />
      <Button onClick={handlesendotp} className="w-full mt-4" variant="outline" color="brightSun.4" disabled={loading?true:false} >{otpVis?"Resend OTP":"Send OTP"}</Button>
      {otpVis && !enablePas? (
        <>
          <PinInput
            length={6}
            type="number"
            inputType="tel"
            inputMode="numeric"
            onChange={handleOtpChange}
          />
          <Button onClick={handleVerifyOtp} className="w-full mt-4" variant="outline" color="brightSun.4">
            Verify
          </Button>
        </>
      ) : (
        ""
      )}

      {enablePas ? (
        <div>
          <PasswordInput
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.currentTarget.value })}
            leftSection={<IconLock size={20} />}
            label="New Password"
            withAsterisk
            placeholder=""
          />
          <Button onClick={handleChangePass} className="w-full mt-4" variant="outline" color="brightSun.4">
            Change Password
          </Button>
        </div>
      ) : (
        ""
      )}
      </div>
    </div>
  );
};