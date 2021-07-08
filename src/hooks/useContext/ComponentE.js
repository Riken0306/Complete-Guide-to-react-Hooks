import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../../App";

function ComponentE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  //user andd channel are directly called from App.js although it is tree like structure from App -> ComponentC -> ComponentE

  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default ComponentE;
