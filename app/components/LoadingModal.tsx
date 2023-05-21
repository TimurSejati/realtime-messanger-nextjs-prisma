"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ClipLoader } from "react-spinners";

const LoadingModal = () => {
  return (
    <Transition.Root show as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-100 bg-opacity-50"></div>
        </Transition.Child>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Dialog.Panel>
              <ClipLoader size={40} color="#0284c7"></ClipLoader>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoadingModal;
