import React, { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { theme } from "../../theme";
import { styles } from "./styles";
import { Options } from "../Options";

function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpenWidget() {
    bottomSheetRef.current?.expand();
  }
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpenWidget}>
        <ChatTeardropDots size={24} color="white" weight="bold" />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Options />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
