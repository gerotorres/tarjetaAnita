import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, Gift, Heart, Sparkles, Star } from 'lucide-react';

const BirthdayInvitation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Datos del cumpleaños
  const birthdayData = {
    name: "Analuz",
    age: 19,
    date: "6 de Septiembre",
    time: "21:00 hrs",
    location: "Quinta de gerito el mejor",
    address: "En la concha de la lora a la vuelta"
  };

  const handleWhatsAppConfirm = () => {
    const message = `Que ondaaa, yo voy... ¡Nos vemos el sabado ${birthdayData.date}!`;
    const phoneNumber = "543584266421";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Neon stars scattered */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <Star 
              className="text-green-400" 
              size={Math.random() > 0.5 ? 12 : 8}
              style={{ filter: 'drop-shadow(0 0 8px #10b981)' }}
            />
          </div>
        ))}
        
        {/* Floating cocktail glasses */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`cocktail-${i}`}
            className="absolute opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            🍸
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-6 py-16">
          
          {/* Header Section */}
          <div className="text-center mb-20">
            {/* Top decorative element */}
            <div className="flex justify-center items-center mb-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent" 
                   style={{ boxShadow: '0 0 10px #ec4899' }}></div>
              <Star className="mx-6 text-green-400 w-6 h-6" style={{ filter: 'drop-shadow(0 0 10px #10b981)' }} />
              <div className="w-24 h-px bg-gradient-to-l from-transparent via-pink-400 to-transparent"
                   style={{ boxShadow: '0 0 10px #ec4899' }}></div>
            </div>

            {/* "Let's PARTY" text */}
            <h1 className="text-2xl md:text-3xl font-light tracking-wider mb-2 text-pink-300"
                style={{ 
                  fontFamily: 'serif',
                  textShadow: '0 0 20px rgba(236, 72, 153, 0.8)' 
                }}>
              Let's
            </h1>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-4 text-pink-400"
                style={{ 
                  textShadow: '0 0 30px rgba(236, 72, 153, 1)',
                  fontFamily: 'serif'
                }}>
              PARTY
            </h2>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-purple-300 mb-12 tracking-wide">
              JOIN US TO CELEBRATE
            </p>

            {/* Name in script font */}
            <h3 className="text-4xl md:text-6xl mb-8 text-cyan-300"
                style={{ 
                  fontFamily: 'cursive',
                  textShadow: '0 0 25px rgba(34, 211, 238, 0.8)',
                  transform: 'rotate(-2deg)'
                }}>
              {birthdayData.name}'s
            </h3>
            
            <h4 className="text-3xl md:text-5xl text-green-400 mb-12"
                style={{ 
                  fontFamily: 'cursive',
                  textShadow: '0 0 25px rgba(16, 185, 129, 0.8)',
                  transform: 'rotate(1deg)'
                }}>
              Birthday
            </h4>

            {/* Decorative cocktail glasses */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🍸</div>
              <div className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🥂</div>
            </div>
          </div>

          {/* Event Details Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30"
                 style={{ boxShadow: '0 0 30px rgba(236, 72, 153, 0.3)' }}>
              
              {/* Date and Time */}
              <div className="text-center space-y-6">
                <div>
                  <p className="text-pink-300 text-lg mb-2">{birthdayData.date.toUpperCase()} | {birthdayData.time}</p>
                  <div className="w-32 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto"
                       style={{ boxShadow: '0 0 8px #10b981' }}></div>
                </div>

                {/* Location */}
                <div>
                  <p className="text-cyan-300 text-xl font-medium mb-2">{birthdayData.location}</p>
                  <p className="text-purple-300 text-sm">{birthdayData.address}</p>
                </div>

                {/* Special note */}
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-4 border border-pink-400/20 mt-6">
                  <p className="text-pink-300 font-medium text-center mb-2">
                    Una noche especial (para chuparse)
                  </p>
                  <p className="text-cyan-300 text-sm text-center">🥤 Traer bebidas</p>
                  <p className="text-purple-300 text-sm text-center mt-2">¡No te la podes perder! ✨</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-indigo-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30"
                 style={{ boxShadow: '0 0 30px rgba(34, 211, 238, 0.3)' }}>
              
              <div className="text-center mb-4">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" 
                        style={{ filter: 'drop-shadow(0 0 10px #22d3ee)' }} />
                <h3 className="text-cyan-300 text-xl font-medium">¿Dónde nos vemos?</h3>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden bg-slate-800/50 border border-cyan-600/30 mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.123!2d-64.3538231!3d-33.0633516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDAzJzQ4LjEiUyA2NMKwMjEnMTMuOCJX!5e0!3m2!1sen!2sar!4v1634567890"
                  className="w-full h-full"
                  style={{ filter: 'invert(0.9) hue-rotate(180deg) saturate(0.8) brightness(1.1)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <button 
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/50 text-cyan-300 rounded-lg hover:from-cyan-600/30 hover:to-blue-600/30 transition-all duration-300 font-medium"
                style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}
                onClick={() => window.open('https://www.google.com/maps/@-33.0633516,-64.3538231,3a,75y,294.52h,81.19t/data=!3m7!1e1!3m5!1s1JMaXr1mU2mibcXU0PBFrQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D8.810000000000002%26panoid%3D1JMaXr1mU2mibcXU0PBFrQ%26yaw%3D294.52!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                📍 Abrir en Google Maps
              </button>
            </div>
          </div>

          {/* RSVP Section */}
          <div className="max-w-xl mx-auto mb-16">
            <div className="bg-gradient-to-b from-purple-900/40 to-indigo-900/40 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 text-center"
                 style={{ boxShadow: '0 0 40px rgba(16, 185, 129, 0.3)' }}>
              
              {!confirmed ? (
                <>
                  <div className="mb-6">
                    <Gift className="w-12 h-12 text-green-400 mx-auto animate-pulse" 
                          style={{ filter: 'drop-shadow(0 0 15px #10b981)' }} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-6 text-green-300"
                      style={{ textShadow: '0 0 15px rgba(16, 185, 129, 0.8)' }}>
                    ¡Confirma tu Asistencia!
                  </h3>
                  
                  <button
                    onClick={handleWhatsAppConfirm}
                    className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 text-lg"
                    style={{ boxShadow: '0 0 25px rgba(34, 197, 94, 0.6)' }}
                  >
                    💚 Confirmar por WhatsApp
                  </button>
                </>
              ) : (
                <div className="animate-fade-in">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center"
                       style={{ boxShadow: '0 0 30px rgba(16, 185, 129, 0.8)' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-green-300"
                      style={{ textShadow: '0 0 15px rgba(16, 185, 129, 0.8)' }}>
                    ¡Confirmación Enviada!
                  </h3>
                  
                  <p className="text-purple-300">
                    Gracias por confirmar. ¡Te espero...! 🎉
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
                   style={{ boxShadow: '0 0 8px #10b981' }}></div>
              <div className="mx-4 text-2xl">🌟</div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-green-400 to-transparent"
                   style={{ boxShadow: '0 0 8px #10b981' }}></div>
            </div>
            
            <p className="text-purple-400 text-sm">
              Hecho por gero 💖
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayInvitation;