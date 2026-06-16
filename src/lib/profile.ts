import profile from "../../data/profile.json";

export interface Link {
  title: string;
  url: string;
  icon?: string; // tên icon từ lucide-react, nếu có
}

export interface Social {
  platform: string; // hiển thị tên mạng xã hội
  url: string;
  icon: string; // tên icon lucide bắt buộc
}

export interface Profile {
  name: string;
  avatar: string; // đường dẫn ảnh trong /public
  bio: string;
  links: Link[];
  socials: Social[];
}

export default profile as Profile;
