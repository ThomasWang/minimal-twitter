import * as SliderPrimitive from "@radix-ui/react-slider"
import { styled } from "@stitches/react"
import { useState } from "react"

import { getStorage, setStorage } from "../../utilities/chromeStorage"
import { SwitchFeedBorders } from "./ExtrasSwitches"
import Separator from "./Separator"

const StyledSlider = styled(SliderPrimitive.Root, {
  position: "relative",
  display: "flex",
  alignItems: "center",
  userSelect: "none",
  touchAction: "none",
  width: "100%",
  cursor: "pointer",

  '&[data-orientation="horizontal"]': {
    height: 20
  },

  '&[data-orientation="vertical"]': {
    flexDirection: "column",
    width: 20,
    height: 100
  }
})

const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: "#8ecdf8",
  position: "relative",
  flexGrow: 1,
  borderRadius: "9999px",

  '&[data-orientation="horizontal"]': { height: 4 },
  '&[data-orientation="vertical"]': { width: 4 }
})

const StyledRange = styled(SliderPrimitive.Range, {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#1DA1F2",
  borderRadius: "9999px",
  height: "100%"
})

const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: "unset",
  display: "block",
  width: 16,
  height: 16,
  backgroundColor: "#1DA1F2",
  borderRadius: 10,
  boxShadow:
    "rgb(101 119 134 / 20%) 0px 0px 7px, rgb(101 119 134 / 15%) 0px 1px 3px 1px",
  "&:hover": { boxShadow: `0 0 0 5px rgba(29, 155, 240, 0.1)` },
  "&:focus": { boxShadow: `0 0 0 5px rgba(29, 155, 240, 0.1)` }
})

const FeedSlider = () => {
  const [userTrack, setUserTrack] = useState(getStorage("feedWidth") || 700)
  const trackDots = [600, 650, 700, 750, 800]

  return (
    <form className="bg-[#192734] rounded-2xl p-4 pb-0">
      <div className="flex items-center pb-4 space-x-3">
        <span className="text-xs font-medium">600px</span>
        <StyledSlider
          onValueChange={(value) => {
            setUserTrack(value[0])
            setStorage({ feedWidth: value[0] })
          }}
          defaultValue={[userTrack]}
          min={600}
          max={800}
          step={50}
          aria-label="Feed Width Slider"
        >
          <StyledTrack>
            <StyledRange />
          </StyledTrack>
          <StyledThumb title={`${userTrack}px`} />
          <span className="absolute left-0 right-0 flex items-center justify-center w-[94%] m-auto -translate-x-[6px]">
            {trackDots.map((track, key) => (
              <span
                key={`track-${key}`}
                title={`${track}px`}
                style={{
                  left: `${Math.abs(((800 - track) / 200) * 100 - 100)}%`,
                  backgroundColor: track > userTrack ? "#8ecdf8" : "#1d9bf0"
                }}
                className="absolute w-3 h-3 rounded-full"
              ></span>
            ))}
          </span>
        </StyledSlider>
        <span className="text-lg font-medium">800px</span>
      </div>
      <Separator />
      <SwitchFeedBorders />
    </form>
  )
}

export default FeedSlider
