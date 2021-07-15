import { ImageContainerProps, IMAGES } from "./images";

type GallerySlideReducerActions = { type: "prev" } | { type: "next" };

type GallerySlideReducerState = {
  prev: ImageContainerProps;
  current: ImageContainerProps;
  next: ImageContainerProps;
};

const initGallerySlideReducer: GallerySlideReducerState = {
  prev: IMAGES[0],
  current: IMAGES[1],
  next: IMAGES[2],
};

const GallerySlideReducer = (
  state: GallerySlideReducerState,
  action: GallerySlideReducerActions
) => {
  switch (action.type) {
    case "prev": {
      const isNextLast = IMAGES.indexOf(state.next) === IMAGES.length - 1;

      return {
        prev: state.current,
        current: state.next,
        next: isNextLast ? IMAGES[0] : IMAGES[IMAGES.indexOf(state.next) + 1],
      };
    }

    case "next": {
      const isPrevZero = IMAGES.indexOf(state.prev) === 0;

      return {
        prev: isPrevZero
          ? IMAGES[IMAGES.length - 1]
          : IMAGES[IMAGES.indexOf(state.prev) - 1],
        current: state.prev,
        next: state.current,
      };
    }
  }
};

export { GallerySlideReducer, initGallerySlideReducer };
