export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* MALD Logo Animation */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-brand/20 border-t-brand rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 bg-brand rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Loading</h2>
          <p className="text-sm text-gray-600">Please wait while we prepare your content</p>
        </div>
        
        {/* Progress Dots */}
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-brand rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-2 h-2 bg-brand rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-2 h-2 bg-brand rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
} 