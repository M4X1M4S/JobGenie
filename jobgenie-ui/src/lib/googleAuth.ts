import { supabase } from "@/lib/supabase-client";
import { toast } from "react-toastify";
const handleGoogleOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
  });
  if (error) {
    toast.error(`Google Sign In failed: ${error}`);
  } else {
    toast.success("Redirecting to Google Sign In...");
  }
};
export default handleGoogleOAuth;
