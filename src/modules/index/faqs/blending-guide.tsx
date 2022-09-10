import { throttle } from 'lodash';
import { useCallback, useMemo, useState } from 'react';
import Measure from 'react-measure';
import { Document, Page, pdfjs } from 'react-pdf';

import BaseModal from '../../../components/modal';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const FaqsBlendingGuide = () => {
  const [open, setOpen] = useState(false);

  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [pageWidth, setPageWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);

  const fitHorizontal = useMemo(() => {
    const wRatio = pageWidth / wrapperWidth;
    const hRatio = pageHeight / wrapperHeight;
    if (wRatio < hRatio) {
      return false;
    }
    return true;
  }, [pageHeight, pageWidth, wrapperHeight, wrapperWidth]);

  const setWrapperDimensions = useCallback(
    throttle((w, h) => {
      setWrapperWidth(w);
      setWrapperHeight(h);
    }, 500),
    []
  );

  return (
    <>
      <BaseModal
        open={open}
        closeModal={() => setOpen(false)}
        className="text-left p-6 rounded-lg bg-white max-w-4xl h-full"
      >
        <div className="flex flex-col h-full">
          <Measure
            bounds
            onResize={(contentRect) =>
              setWrapperDimensions(contentRect.bounds?.width, contentRect.bounds?.height)
            }
          >
            {({ measureRef }) => (
              <div
                ref={measureRef}
                className="relative flex-[1] flex items-center justify-center h-full w-full overflow-auto"
              >
                <Document file="./Blend_Guide.pdf">
                  <Page
                    onLoadSuccess={(page) => {
                      setPageWidth(page.width);
                      setPageHeight(page.height);
                    }}
                    width={fitHorizontal ? wrapperWidth : undefined}
                    height={!fitHorizontal ? wrapperHeight : undefined}
                    pageNumber={1}
                  />
                </Document>
              </div>
            )}
          </Measure>
        </div>
      </BaseModal>

      <button
        onClick={() => setOpen(true)}
        className="italic text-pastel-orange underline opacity-80 hover:opacity-100"
      >
        click here for our blending guide
      </button>
    </>
  );
};

export default FaqsBlendingGuide;
