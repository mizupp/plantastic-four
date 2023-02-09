// AvatarSelection component
// Styling for this componentcan be found under the Create Page styling

import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeAvatar } from "../../actions";
import {
  image33,
  image34,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image46,
  image47,
  image48,
  image49,
  image50,
  image51,
  image52,
  image53,
  image54,
  image55,
  image56,
  image57,
  image58,
  image59,
  image60,
  image61,
  image62,
  image63,
  image64,
  image65,
  image66,
  image67,
  image68,
} from "../../assets/img";

const AvatarSelection = () => {
  const dispatch = useDispatch();
  const [avatars, setAvatars] = useState([
    image33,
    image34,
    image36,
    image37,
    image38,
    image39,
    image40,
    image41,
    image42,
    image43,
    image44,
    image45,
    image46,
    image47,
    image48,
    image49,
    image50,
    image51,
    image52,
    image53,
    image54,
    image55,
    image56,
    image57,
    image58,
    image59,
    image60,
    image61,
    image62,
    image63,
    image64,
    image65,
    image66,
    image67,
    image68,
  ]);

  const [selectedAvatar, setSelectedAvatar] = useState(image33);

  const onSelect = (a) => {
    setSelectedAvatar(a);
    updateAvatar(a);
  };

  const updateAvatar = (a) => {
    console.log(a);
    dispatch(storeAvatar(a));
  };

  return (
    <>
      <div className="avatar-selection">
        <div className="flex flex-col items-center gap-2 bg-#43A047-200 rounded-lg p-2 drop-shadow-lg text-#fef9e8">
          <div className="title">Choose your plant's avatar</div>
          <div className="grid md:grid-cols-5 gap-auto text-auto">
            {avatars.map((a, i) => (
              <>
                <img
                  src={a}
                  id={a}
                  key={i}
                  className={` h-20 w-50 ${
                    a == selectedAvatar ? "opacity-20" : "opacity-100"
                  }`}
                  onClick={() => onSelect(a)}
                />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AvatarSelection;
