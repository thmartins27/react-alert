'use client';

import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Transition } from '@headlessui/react';
import React from 'react'

export interface ISuccess {
  show: boolean
  setShow: React.Dispatch<boolean>
  message?: string
  title: string
}

export const Success: React.FC<ISuccess> = ({
  setShow, show, title, message
}) => {

  return <div
    aria-live="assertive"
    className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
  >
    <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
      <Transition show={show}>
        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-blue-100 shadow-lg ring-1 ring-black/5 transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
          <div className="p-4">
            <div className="flex items-start">
              <div className="shrink-0">
                <CheckCircleIcon aria-hidden="true" className="size-6 text-green" />
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">{title}</p>
                <p className="mt-1 text-sm text-gray-500">{message}</p>
              </div>
              <div className="ml-4 flex shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setShow(false);
                  }}
                  className="inline-flex rounded-md bg-blue-100 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon aria-hidden="true" className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
};