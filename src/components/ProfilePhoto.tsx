import React, { useState } from 'react';
import { ShieldCheck, Upload, MapPin, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

interface ProfilePhotoProps {
  className?: string;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ className = '' }) => {
  const [imageSrc, setImageSrc] = useState<string>('/profile.jpg');
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [customUploaded, setCustomUploaded] = useState<boolean>(false);

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(false);
  };

  const handleImageLoad = () => {
    setIsLoaded(true);
    setHasError(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
      setCustomUploaded(true);
      setHasError(false);
    }
  };

  return (
    <div id="profile-photo-container" className={`relative group ${className}`}>
      {/* Subtle outer glow on hover */}
      <div 
        className="absolute -inset-2 bg-gradient-to-tr from-[#4DA3FF]/20 to-[#5CC8FF]/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative rounded-2xl bg-[#151A20] border border-white/10 p-4 sm:p-5 overflow-hidden transition-all duration-300 group-hover:border-[#4DA3FF]/30">
        <div className="relative aspect-square max-w-[280px] sm:max-w-[320px] mx-auto rounded-xl overflow-hidden bg-[#11151A] border border-white/8 flex items-center justify-center">
          {/* Main Image with fallback */}
          {!hasError ? (
            <img
              src={imageSrc}
              alt="Md Alamin — GoHighLevel, CRM & Lead Generation Specialist"
              onError={handleImageError}
              onLoad={handleImageLoad}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null}

          {/* Tasteful editorial placeholder when image is absent or loading */}
          {hasError && (
            <div 
              id="profile-placeholder-graphic" 
              className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#151A20] to-[#0B0D10]"
            >
              {/* Monogram circle */}
              <div className="relative w-24 h-24 mb-4 rounded-2xl bg-[#11151A] border border-[#4DA3FF]/30 flex items-center justify-center shadow-[0_0_24px_rgba(77,163,255,0.15)]">
                <span className="text-3xl font-extrabold tracking-tight text-[#F5F7FA] font-heading">
                  MA
                </span>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#4DA3FF] border-2 border-[#151A20] flex items-center justify-center">
                  <ShieldCheck className="w-3 h-3 text-[#0B0D10]" />
                </span>
              </div>

              <div className="text-sm font-semibold text-[#F5F7FA]">
                {profileData.name}
              </div>
              <div className="text-xs text-[#A7AFBA] mt-0.5 max-w-[200px]">
                CRM & Lead Operations
              </div>

              {/* Instant local preview uploader / helper button */}
              <label 
                htmlFor="profile-image-upload" 
                className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#5CC8FF] bg-[#4DA3FF]/10 hover:bg-[#4DA3FF]/20 border border-[#4DA3FF]/25 cursor-pointer transition-all"
                title="Preview photo from your device"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Preview</span>
                <input
                  id="profile-image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="sr-only"
                />
              </label>

              <span className="text-[10px] text-white/40 mt-2 font-mono">
                Reads /public/profile.jpg
              </span>
            </div>
          )}

          {/* Quick badge on bottom of photo when loaded */}
          {(!hasError && isLoaded) && (
            <div className="absolute bottom-2.5 left-2.5 right-2.5 py-1.5 px-2.5 rounded-lg bg-[#0B0D10]/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[11px]">
              <span className="text-[#F5F7FA] font-medium font-heading">
                {profileData.name}
              </span>
              <span className="flex items-center gap-1 text-[#5CC8FF] font-mono text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4DA3FF] animate-pulse" />
                <span>Remote Ready</span>
              </span>
            </div>
          )}
        </div>

        {/* Metadata Strip below photo */}
        <div className="mt-4 pt-3 border-t border-white/8 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#A7AFBA] flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#4DA3FF]" />
              <span>Location</span>
            </span>
            <span className="text-[#F5F7FA] font-medium">
              {profileData.contact.location}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-[#A7AFBA] flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#5CC8FF]" />
              <span>Focus</span>
            </span>
            <span className="text-[#5CC8FF] font-medium font-mono text-[11px]">
              GoHighLevel & CRM
            </span>
          </div>

          {customUploaded && (
            <div className="text-[11px] text-[#A7AFBA] text-center pt-1 italic">
              Custom photo preview active. Save file to <code className="text-white">/public/profile.jpg</code> for permanent deployment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
