import React from "react";

const ContactDetail = () => {
  return (
    <div className="grow">
      <div className="flex flex-col gap-6 mt-12 min-h-screen xl:h-[28rem]">
        <ul role="list" className="mt-6 flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <span className="font-semibold">Email:</span>
            <a href="mailto:nguyenthaicong265@gmail.com">
              nguyenthaicong265@gmail.com
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-semibold">Telegram:</span>
            <a href="https://t.me/HarryRiddle">@HarryRiddle</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-semibold">Twitter:</span>
            <a href="https://twitter.com/0xHarryNguyenVN">@0xHarryNguyenVN</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-semibold">Github:</span>
            <a href="https://github.com/thai-cong-nguyen">@thai-cong-nguyen</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactDetail;
