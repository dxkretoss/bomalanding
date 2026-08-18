import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Check, Sparkles, User, Mail, Phone, Building, ArrowRight, ShieldCheck, RotateCcw } from 'lucide-react';
import RawPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useVillageTest } from '../context/VillageTestContext';
import Logo from './Logo';
import { submitVillageTestEntry } from '../supabaseClient';

import heroBg from '../assets/hero_bg.jpg';

const PhoneInput = RawPhoneInput.default || RawPhoneInput;

export const villageTestQuestions = [
  {
    id: 1,
    text: "What type of environment feels most like home?",
    type: "single",
    options: [
      { key: "A", label: "Urban" },
      { key: "B", label: "Suburban" },
      { key: "C", label: "Rural" },
      { key: "D", label: "Nature-integrated" }
    ]
  },
  {
    id: 2,
    text: "What kind of daily rhythm do you prefer?",
    type: "single",
    options: [
      { key: "A", label: "Quiet and private" },
      { key: "B", label: "Social and active" },
      { key: "C", label: "Balanced" }
    ]
  },
  {
    id: 3,
    text: "What matters most in your ideal living space?",
    type: "single",
    options: [
      { key: "A", label: "Privacy" },
      { key: "B", label: "Community" },
      { key: "C", label: "Land/nature" },
      { key: "D", label: "Affordability" }
    ]
  },
  {
    id: 4,
    text: "How do you feel about shared spaces?",
    type: "single",
    options: [
      { key: "A", label: "Love them" },
      { key: "B", label: "Open to it" },
      { key: "C", label: "Prefer mostly private" },
      { key: "D", label: "Privacy with Community Spaces" }
    ]
  },
  {
    id: 5,
    text: "Would you want shared resources? (garden, tools, childcare, etc.)",
    type: "single",
    options: [
      { key: "A", label: "Yes" },
      { key: "B", label: "Maybe" },
      { key: "C", label: "No" }
    ]
  },
  {
    id: 6,
    text: "What is your noise tolerance?",
    type: "single",
    options: [
      { key: "A", label: "Very Low" },
      { key: "B", label: "Moderate" },
      { key: "C", label: "High" },
      { key: "D", label: "Medical Sensitivity" }
    ]
  },
  {
    id: 7,
    text: "What is your timeline to purchase?",
    type: "single",
    options: [
      { key: "A", label: "ASAP (0-6 months)" },
      { key: "B", label: "6-18 months" },
      { key: "C", label: "Just exploring" }
    ]
  },
  {
    id: 8,
    text: "What is your financial readiness?",
    type: "single",
    options: [
      { key: "A", label: "Ready now; Pre Approval Letter In hand" },
      { key: "B", label: "Almost ready; Have not applied for lending" },
      { key: "C", label: "Need guidance" },
      { key: "D", label: "I'm interested in group lending" }
    ]
  },
  {
    id: 9,
    text: "Share with us your credit comfort",
    type: "single",
    options: [
      { key: "A", label: "Strong and stable 720-850" },
      { key: "B", label: "Improving 620-719" },
      { key: "C", label: "Unsure 300-619" }
    ]
  },
  {
    id: 10,
    text: "When decisions need to be made in a shared group, what feels best to you?",
    type: "single",
    options: [
      { key: "A", label: "Talking things through together until everyone is comfortable with the outcome" },
      { key: "B", label: "Sharing input, then trusting a leader or small group to decide" },
      { key: "C", label: "Following a clear system or framework that keeps decisions efficient and fair" }
    ]
  },
  {
    id: 11,
    text: "When disagreements happen, what feels most natural to you?",
    type: "single",
    options: [
      { key: "A", label: "Talking it out right away and finding a solution" },
      { key: "B", label: "Taking a step back, then coming back to discuss it thoughtfully" },
      { key: "C", label: "Giving space and avoiding confrontation when possible" }
    ]
  },
  {
    id: 12,
    text: "When working or living with others, what level of structure feels best to you?",
    type: "single",
    options: [
      { key: "A", label: "Flexible and organic—figuring things out as we go" },
      { key: "B", label: "A mix of structure and flexibility" },
      { key: "C", label: "Clear structure with defined roles and expectations" }
    ]
  },
  {
    id: 13,
    text: "What matters most to you in a community you’re building or joining?",
    type: "single",
    options: [
      { key: "A", label: "A stable, dependable environment where people feel safe and supported" },
      { key: "B", label: "A growth-oriented space where people are evolving, learning, and improving together" },
      { key: "C", label: "A creative and expressive community that encourages individuality and new ideas" },
      { key: "D", label: "A sustainability-focused lifestyle that prioritizes land, environment, and long-term impact" }
    ]
  },
  {
    id: 14,
    text: "Would you like more information on BOMA- Living?",
    type: "single",
    options: [
      { key: "Y", label: "Yes" },
      { key: "N", label: "No" }
    ]
  },
  {
    id: 15,
    text: "How interested are you in alternative or non-traditional home building styles?",
    subtitle: "(such as earth homes, modular builds, or eco-focused design)",
    type: "single",
    options: [
      { key: "A", label: "Very interested — I’m excited by innovative or nature-integrated building methods" },
      { key: "B", label: "Somewhat interested — I’m open, but would want to learn more" },
      { key: "C", label: "Not very interested — I prefer more traditional home styles" }
    ]
  },
  {
    id: 16,
    text: "What draws you most to the idea of BOMA?",
    type: "single",
    options: [
      { key: "A", label: "Creating a more affordable path to homeownership" },
      { key: "B", label: "Building meaningful relationships and a sense of community" },
      { key: "C", label: "Owning land and having more control over my living environment" },
      { key: "D", label: "Exploring a new, more intentional way of living" }
    ]
  },
  {
    id: 17,
    text: "Share your contact information",
    type: "contact_form"
  },
  {
    id: 18,
    text: "Would you like to learn more about shared equity real estate ownership?",
    type: "single",
    options: [
      { key: "Y", label: "Yes" },
      { key: "N", label: "No" }
    ]
  }
];

const LOCAL_STORAGE_KEYS = {
  STEP: 'boma_vt_step',
  ANSWERS: 'boma_vt_answers',
  CONTACT: 'boma_vt_contact'
};

export const VillageTestModal = () => {
  const { isOpen, closeVillageTest } = useVillageTest();

  // Load initial state from LocalStorage if available
  const [currentStep, setCurrentStep] = useState(() => {
    try {
      const savedStep = localStorage.getItem(LOCAL_STORAGE_KEYS.STEP);
      return savedStep !== null ? parseInt(savedStep, 10) : 0;
    } catch (e) {
      return 0;
    }
  });

  const [answers, setAnswers] = useState(() => {
    try {
      const savedAnswers = localStorage.getItem(LOCAL_STORAGE_KEYS.ANSWERS);
      return savedAnswers ? JSON.parse(savedAnswers) : {};
    } catch (e) {
      return {};
    }
  });

  const [contactData, setContactData] = useState(() => {
    try {
      const savedContact = localStorage.getItem(LOCAL_STORAGE_KEYS.CONTACT);
      return savedContact ? JSON.parse(savedContact) : {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        company: ''
      };
    } catch (e) {
      return { firstName: '', lastName: '', phone: '', email: '', company: '' };
    }
  });

  const [contactErrors, setContactErrors] = useState({});
  const [contactTouched, setContactTouched] = useState({});

  // Save state changes to LocalStorage automatically
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEYS.STEP, currentStep.toString());
      localStorage.setItem(LOCAL_STORAGE_KEYS.ANSWERS, JSON.stringify(answers));
      localStorage.setItem(LOCAL_STORAGE_KEYS.CONTACT, JSON.stringify(contactData));
    } catch (e) {
      // Ignore localStorage write errors
    }
  }, [currentStep, answers, contactData]);

  if (!isOpen) return null;

  const totalQuestions = villageTestQuestions.length;
  const isWelcome = currentStep === 0;
  const isResult = currentStep > totalQuestions;
  const currentQuestion = !isWelcome && !isResult ? villageTestQuestions[currentStep - 1] : null;

  const progressPercent = isWelcome ? 0 : isResult ? 100 : Math.round((currentStep / totalQuestions) * 100);

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setContactData({ firstName: '', lastName: '', phone: '', email: '', company: '' });
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.STEP);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.ANSWERS);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.CONTACT);
    } catch (e) {}
  };

  const handleSelectOption = (optionKey, optionLabel) => {
    const updatedAnswers = { ...answers, [currentQuestion.id]: { key: optionKey, label: optionLabel } };
    setAnswers(updatedAnswers);

    // If answering the final question (Question 18), save complete assessment (contact + all 18 answers) to Supabase
    if (currentStep === totalQuestions) {
      submitVillageTestEntry(contactData, updatedAnswers);
    }
    
    // Auto advance after select
    setTimeout(() => {
      if (currentStep < totalQuestions) {
        setCurrentStep(prev => prev + 1);
      } else {
        setCurrentStep(totalQuestions + 1); // Go to Result
      }
    }, 250);
  };

  const validateContact = (data = contactData) => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.firstName || data.firstName.trim().length < 2) {
      errs.firstName = "First name must be at least 2 characters.";
    }
    if (!data.lastName || data.lastName.trim().length < 2) {
      errs.lastName = "Last name must be at least 2 characters.";
    }
    if (!data.email) {
      errs.email = "Email address is required.";
    } else if (!emailRegex.test(data.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!data.phone || data.phone.replace(/\D/g, '').length < 7) {
      errs.phone = "Please enter a valid phone number.";
    }

    return errs;
  };

  const handleContactBlur = (field) => {
    setContactTouched(prev => ({ ...prev, [field]: true }));
    setContactErrors(validateContact());
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errs = validateContact();
    setContactErrors(errs);
    setContactTouched({ firstName: true, lastName: true, email: true, phone: true });

    if (Object.keys(errs).length > 0) return;

    const updatedAnswers = { ...answers, 17: contactData };
    setAnswers(updatedAnswers);
    setCurrentStep(18);
  };

  const handleNext = () => {
    if (currentStep < totalQuestions) {
      setCurrentStep(prev => prev + 1);
    } else {
      setCurrentStep(totalQuestions + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const hasSavedProgress = Object.keys(answers).length > 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Full-Screen Page Backdrop Photo - Clearly Visible Architectural Image */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={heroBg}
          alt="BOMA Living Community Backdrop"
          className="w-full h-full object-cover filter brightness-[0.65] saturate-[1.1] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A141C]/60 via-[#2E2330]/50 to-[#1A141C]/70 backdrop-blur-[3px]" />
      </div>

      {/* Custom Styles override for react-phone-input-2 dark theme */}
      <style>{`
        .boma-phone-input .react-tel-input .form-control {
          width: 100% !important;
          background-color: #1A141C !important;
          color: #FFFFFF !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-radius: 0.75rem !important;
          font-size: 0.75rem !important;
          height: 42px !important;
          padding-left: 48px !important;
        }
        .boma-phone-input .react-tel-input .flag-dropdown {
          background-color: #1A141C !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
          border-top-left-radius: 0.75rem !important;
          border-bottom-left-radius: 0.75rem !important;
        }
        .boma-phone-input .react-tel-input .flag-dropdown:hover,
        .boma-phone-input .react-tel-input .flag-dropdown.open {
          background-color: #2E2330 !important;
        }
        .boma-phone-input .react-tel-input .country-list {
          background-color: #2E2330 !important;
          color: #F5F1EA !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 0.75rem !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.6) !important;
        }
        .boma-phone-input .react-tel-input .country-list .country:hover,
        .boma-phone-input .react-tel-input .country-list .country.highlight {
          background-color: #B87333 !important;
          color: #FFFFFF !important;
        }
        .boma-phone-input .react-tel-input .search-box {
          background-color: #1A141C !important;
          color: #FFFFFF !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 0.5rem !important;
          padding: 6px 10px !important;
        }
      `}</style>

      {/* Main Glassmorphic Container with Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96, y: 15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl bg-[#2E2330]/90 backdrop-blur-2xl text-[#F5F1EA] rounded-3xl border border-[#E7DED0]/20 shadow-2xl overflow-hidden flex flex-col my-auto"
      >
        {/* Background Image & Glassmorphic Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={heroBg}
            alt="BOMA Living Community"
            className="w-full h-full object-cover filter brightness-[0.28] saturate-[0.85] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A141C]/90 via-[#2E2330]/85 to-[#1A141C]/95 backdrop-blur-md" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,106,74,0.25),transparent_70%)]" />
        </div>
        
        {/* TOP BAR */}
        <div className="relative z-10 flex items-center justify-between px-6 py-4 border-b border-[#E7DED0]/10 bg-[#1A141C]/70 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <Logo variant="light" className="h-7 w-auto" />
            <span className="text-xs font-mono text-[#D7A27A] uppercase tracking-wider hidden sm:inline">
              Village Test Assessment
            </span>
          </div>

          <div className="flex items-center gap-3">
            {!isWelcome && !isResult && (
              <span className="text-xs font-semibold text-[#D7A27A] bg-[#B87333]/20 px-3 py-1 rounded-full border border-[#B87333]/30">
                {currentStep} / {totalQuestions} ({progressPercent}%)
              </span>
            )}

            {/* Reset / Start Over button */}
            {hasSavedProgress && (
              <button
                onClick={handleReset}
                title="Reset Assessment & Clear Saved Answers"
                className="flex items-center gap-1 text-[11px] font-semibold text-[#F5F1EA]/60 hover:text-white bg-white/5 hover:bg-white/15 px-2.5 py-1 rounded-full border border-white/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3 text-[#C46A4A]" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}

            <button
              onClick={closeVillageTest}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F1EA] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PROGRESS BAR TRACK */}
        {!isWelcome && !isResult && (
          <div className="w-full bg-black/40 h-1.5">
            <motion.div
              className="bg-gradient-to-r from-[#C46A4A] to-[#B87333] h-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}

        {/* MODAL BODY */}
        <div className="p-6 sm:p-10 lg:p-12 min-h-[460px] flex flex-col justify-center relative">
          <AnimatePresence mode="wait">
            
            {/* SCREEN 0: WELCOME SCREEN */}
            {isWelcome && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 text-center max-w-xl mx-auto"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C46A4A]/20 border border-[#C46A4A]/40 text-[#C46A4A] flex items-center justify-center mx-auto shadow-lg">
                  <Sparkles className="w-8 h-8" />
                </div>

                <div className="space-y-3">
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                    Welcome to the BOMA Living Village Test
                  </h2>
                  <p className="text-sm text-[#F5F1EA]/80 leading-relaxed max-w-md mx-auto">
                    Discover your co-living compatibility profile, financial readiness, and community matching score in ~3 minutes.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  {hasSavedProgress ? (
                    <>
                      <button
                        onClick={() => setCurrentStep(currentStep > 0 && currentStep <= totalQuestions ? currentStep : 1)}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C46A4A] hover:bg-[#b05d3e] text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-[#C46A4A]/30 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Resume Saved Progress</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F1EA] font-medium text-xs transition-colors cursor-pointer border border-white/15"
                      >
                        Start Fresh
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C46A4A] hover:bg-[#b05d3e] text-white font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-[#C46A4A]/30 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Start Assessment</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <p className="text-[11px] text-[#F5F1EA]/50 font-mono">
                  18 Quick Questions • Progress Saved Automatically
                </p>
              </motion.div>
            )}

            {/* SCREEN 1..18: QUESTION FLOW */}
            {!isWelcome && !isResult && currentQuestion && (
              <motion.div
                key={currentQuestion.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 max-w-xl mx-auto w-full"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#C46A4A] uppercase tracking-wider">
                    Question {currentQuestion.id} of {totalQuestions}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                    {currentQuestion.text}
                  </h3>
                  {currentQuestion.subtitle && (
                    <p className="text-xs text-[#F5F1EA]/60 italic">
                      {currentQuestion.subtitle}
                    </p>
                  )}
                </div>

                {/* SINGLE SELECT MULTIPLE CHOICE OPTIONS */}
                {currentQuestion.type === 'single' && (
                  <div className="space-y-3 pt-2">
                    {currentQuestion.options.map((opt) => {
                      const isSelected = answers[currentQuestion.id]?.key === opt.key;
                      return (
                        <button
                          key={opt.key}
                          onClick={() => handleSelectOption(opt.key, opt.label)}
                          className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-[#B87333] border-[#D7A27A] text-white shadow-lg'
                              : 'bg-[#1A141C]/60 border-white/10 text-[#F5F1EA]/90 hover:bg-[#1A141C] hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold font-mono ${
                              isSelected ? 'bg-white text-[#B87333]' : 'bg-white/10 text-[#D7A27A]'
                            }`}>
                              {opt.key}
                            </span>
                            <span className="text-sm font-medium leading-relaxed">{opt.label}</span>
                          </div>

                          {isSelected && <Check className="w-5 h-5 text-white flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* QUESTION 17: CONTACT FORM WITH REACT-PHONE-INPUT-2 & VALIDATION */}
                {currentQuestion.type === 'contact_form' && (
                  <form onSubmit={handleContactSubmit} className="space-y-4 pt-2" noValidate>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-[#D7A27A] mb-1">First Name *</label>
                        <input
                          type="text"
                          value={contactData.firstName}
                          onChange={(e) => setContactData({ ...contactData, firstName: e.target.value })}
                          onBlur={() => handleContactBlur('firstName')}
                          placeholder="Amara"
                          className={`w-full bg-[#1A141C] border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none transition-colors ${
                            contactErrors.firstName && contactTouched.firstName
                              ? 'border-red-500 bg-red-950/20'
                              : 'border-white/15 focus:border-[#C46A4A]'
                          }`}
                        />
                        {contactErrors.firstName && contactTouched.firstName && (
                          <span className="text-[10px] text-red-400 mt-1 block">{contactErrors.firstName}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#D7A27A] mb-1">Last Name *</label>
                        <input
                          type="text"
                          value={contactData.lastName}
                          onChange={(e) => setContactData({ ...contactData, lastName: e.target.value })}
                          onBlur={() => handleContactBlur('lastName')}
                          placeholder="Smith"
                          className={`w-full bg-[#1A141C] border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none transition-colors ${
                            contactErrors.lastName && contactTouched.lastName
                              ? 'border-red-500 bg-red-950/20'
                              : 'border-white/15 focus:border-[#C46A4A]'
                          }`}
                        />
                        {contactErrors.lastName && contactTouched.lastName && (
                          <span className="text-[10px] text-red-400 mt-1 block">{contactErrors.lastName}</span>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {/* International Country Select Phone Input (react-phone-input-2) */}
                      <div className={`boma-phone-input ${contactErrors.phone && contactTouched.phone ? 'has-error' : ''}`}>
                        <label className="block text-xs font-medium text-[#D7A27A] mb-1">Phone Number *</label>
                        <PhoneInput
                          country={'us'}
                          value={contactData.phone}
                          onChange={(phone) => setContactData({ ...contactData, phone })}
                          onBlur={() => handleContactBlur('phone')}
                          enableSearch={true}
                          placeholder="+1 (206) 555-0192"
                          searchPlaceholder="Search country..."
                        />
                        {contactErrors.phone && contactTouched.phone && (
                          <span className="text-[10px] text-red-400 mt-1 block">{contactErrors.phone}</span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#D7A27A] mb-1">Email Address *</label>
                        <input
                          type="email"
                          value={contactData.email}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                          onBlur={() => handleContactBlur('email')}
                          placeholder="amara@example.com"
                          className={`w-full bg-[#1A141C] border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none transition-colors ${
                            contactErrors.email && contactTouched.email
                              ? 'border-red-500 bg-red-950/20'
                              : 'border-white/15 focus:border-[#C46A4A]'
                          }`}
                        />
                        {contactErrors.email && contactTouched.email && (
                          <span className="text-[10px] text-red-400 mt-1 block">{contactErrors.email}</span>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#D7A27A] mb-1">Company (Optional)</label>
                      <input
                        type="text"
                        value={contactData.company}
                        onChange={(e) => setContactData({ ...contactData, company: e.target.value })}
                        placeholder="Architectural Studio"
                        className="w-full bg-[#1A141C] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#C46A4A]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 rounded-xl bg-[#C46A4A] hover:bg-[#b05d3e] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>Continue to Final Question</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}

              </motion.div>
            )}

            {/* SCREEN 19: CLEAN THANK YOU SCREEN (NO SCORE) */}
            {isResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-center max-w-xl mx-auto py-4"
              >
                <div className="w-20 h-20 rounded-full bg-[#C46A4A]/20 border-2 border-[#C46A4A] text-[#C46A4A] flex items-center justify-center mx-auto shadow-xl">
                  <Check className="w-10 h-10 stroke-[3]" />
                </div>

                <div className="space-y-3">
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                    Thank you for completing the BOMA Village Test
                  </h2>
                  <p className="text-sm text-[#F5F1EA]/80 leading-relaxed max-w-md mx-auto">
                    Your responses have been successfully submitted. Our team will review your community profile and get in touch with you shortly.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={closeVillageTest}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#C46A4A] hover:bg-[#b05d3e] text-white font-semibold text-xs transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Return to BOMA Platform
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F5F1EA] text-xs font-semibold transition-colors cursor-pointer border border-white/15"
                  >
                    Submit Another Response
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* BOTTOM NAVIGATION FOOTER */}
        {!isWelcome && !isResult && (
          <div className="relative z-10 flex items-center justify-between px-6 py-4 border-t border-[#E7DED0]/10 bg-[#1A141C]/70 backdrop-blur-md">
            <button
              onClick={handleBack}
              disabled={currentStep <= 1}
              className={`flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer ${
                currentStep <= 1
                  ? 'text-white/20 cursor-not-allowed'
                  : 'text-[#F5F1EA]/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            {currentQuestion?.type === 'single' && (
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion?.id]}
                className={`flex items-center gap-1.5 text-xs font-semibold px-5 py-2 rounded-full transition-all cursor-pointer ${
                  answers[currentQuestion?.id]
                    ? 'bg-[#B87333] text-white hover:bg-[#a36329]'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

      </motion.div>
    </div>
  );
};

export default VillageTestModal;
