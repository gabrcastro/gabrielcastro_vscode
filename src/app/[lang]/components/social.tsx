"use client";

import clsx from 'clsx';
import { Blocks, BugPlay, ChevronDown, ChevronRight, File, Files, Folder, GitMerge, Github, Instagram, Linkedin, MoreHorizontal, Search, Youtube } from 'lucide-react'
import { useState } from 'react';
import FileItem from './file';

function Social() {

  const instagramLink = "https://www.instagram.com/ga.brielcastro/";
  const youtubeLink = "https://www.youtube.com/channel/UC4IeLLQt-MglrehgyEG9B6g";
  const githubLink = "https://github.com/gabrcastro";
  const linkedinLink = "https://www.linkedin.com/in/gabrielsouzacastro/";

  return (
    <div className='flex flex-col h-max w-full mt-2 pl-1'>

      {/* ABOUT */}
      <FileItem samePage={false} route={githubLink} icon={<Github size={14} />} title='github' />

      {/* EXPERIENCES */}
      <FileItem samePage={false} route={linkedinLink} icon={<Linkedin size={14} />} title='linkedin' />

      {/* EDUCATION */}
      <FileItem samePage={false} route={instagramLink} icon={<Instagram size={14} />} title='instagram' />

      {/* PROJECTS */}
      <FileItem samePage={false} route={youtubeLink} icon={<Youtube size={14} />} title='youtube' />
    </div>
  );
}

export default Social;