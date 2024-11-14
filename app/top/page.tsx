"use client"

import { useState } from "react";
import axios from "axios";
import MessageInput from "../common/component/message_input";
import AutoGenerationMessage from "../common/component/auto_generation_message";
import Link from 'next/link';
import {
    EyeIcon,
    TrashIcon
  } from '@heroicons/react/24/outline';

const Top = () => {

    return (
        <>

<div class="mb-6">
  <label for="input-field" class="block text-sm font-medium text-gray-700 mb-1">
    Input Label
  </label>
  <input
    id="input-field"
    type="text"
    class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 placeholder-gray-400"
    placeholder="Enter text"
  />
  <p class="mt-2 text-sm text-red-600" id="input-error">
    Validation error message
  </p>
</div>



        </>

    )
}

export default Top;
