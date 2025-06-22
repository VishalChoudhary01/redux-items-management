import React, { useState, useRef, useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/ItemSlice';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const AddItems = () => {
  const dispatch = useDispatch();
  const coverInputRef = useRef(null);
  const imagesInputRef = useRef(null);

  const [form, setForm] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: null,
    images: []
  });

  const [coverPreview, setCoverPreview] = useState(null);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    return () => {
      if (coverPreview) URL.revokeObjectURL(coverPreview);
      imagePreviews.forEach(preview => URL.revokeObjectURL(preview));
    };
  }, [coverPreview, imagePreviews]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) newErrors.name = 'Item name is required';
    if (!form.type.trim()) newErrors.type = 'Item type is required';
    if (!form.description.trim()) newErrors.description = 'Description is required';
    if (!form.coverImage) newErrors.coverImage = 'Cover image is required';
    if (form.images.length === 0) newErrors.images = 'At least one additional image is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.match('image.*')) {
      setErrors(prev => ({ ...prev, coverImage: 'Please upload an image file' }));
      return;
    }

    setForm(prev => ({ ...prev, coverImage: file }));
    
    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setCoverPreview(previewUrl);
    
    // Clear error
    if (errors.coverImage) {
      setErrors(prev => ({ ...prev, coverImage: undefined }));
    }
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const invalidFiles = files.filter(file => !file.type.match('image.*'));
    if (invalidFiles.length > 0) {
      setErrors(prev => ({ ...prev, images: 'Please upload only image files' }));
      return;
    }

    setForm(prev => ({ ...prev, images: [...prev.images, ...files] }));
    
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(prev => [...prev, ...newPreviews]);
    
    if (errors.images) {
      setErrors(prev => ({ ...prev, images: undefined }));
    }
  };

  const removeCoverImage = () => {
    setForm(prev => ({ ...prev, coverImage: null }));
    setCoverPreview(null);
    if (coverInputRef.current) coverInputRef.current.value = '';
    setErrors(prev => ({ ...prev, coverImage: 'Cover image is required' }));
  };

  const removeAdditionalImage = (index) => {
    const newImages = [...form.images];
    const newPreviews = [...imagePreviews];
    
    URL.revokeObjectURL(newPreviews[index]);
    
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    
    setForm(prev => ({ ...prev, images: newImages }));
    setImagePreviews(newPreviews);
    
    if (newImages.length === 0) {
      setErrors(prev => ({ ...prev, images: 'At least one additional image is required' }));
    }
  };

  const clearAllAdditionalImages = () => {
    imagePreviews.forEach(preview => URL.revokeObjectURL(preview));
    
    setForm(prev => ({ ...prev, images: [] }));
    setImagePreviews([]);
    if (imagesInputRef.current) imagesInputRef.current.value = '';
    setErrors(prev => ({ ...prev, images: 'At least one additional image is required' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    dispatch(addItem({
      ...form,
      id: nanoid(),
    }));
    
    alert("Item successfully added");
    
    // Reset form
    setForm({
      name: '',
      type: '',
      description: '',
      coverImage: null,
      images: []
    });
    
    setCoverPreview(null);
    imagePreviews.forEach(preview => URL.revokeObjectURL(preview));
    setImagePreviews([]);
    setErrors({});
    
    // Clear file inputs
    if (coverInputRef.current) coverInputRef.current.value = '';
    if (imagesInputRef.current) imagesInputRef.current.value = '';
    
    setIsSubmitting(false);
  };

  return (
    <div className='w-full pt-12 pb-32'>
    <div className="max-w-7xl mx-auto  bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">Add New Item</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Input 
            label="Item Name"
            name="name"
            placeholder="Enter item name"
            value={form.name}
            onChange={handleChange}
            required
            error={errors.name}
          />
          
          <Input 
            label="Item Type"
            name="type"
            placeholder="e.g., Shirt, Pant, Shoes"
            value={form.type}
            onChange={handleChange}
            required
            error={errors.type}
          />
        </div>
        
        <Input 
          label="Description"
          name="description"
          type="textarea"
          placeholder="Enter detailed description..."
          value={form.description}
          onChange={handleChange}
          required
          rows="4"
          error={errors.description}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Cover Image Section */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Cover Image {errors.coverImage && <span className="text-red-500 text-xs"> - {errors.coverImage}</span>}
              </label>
              {coverPreview && (
                <button 
                  type="button"
                  onClick={removeCoverImage}
                  className="text-xs text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              )}
            </div>
            
            {coverPreview ? (
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img 
                    src={coverPreview} 
                    alt="Cover preview" 
                    className="w-full h-48 object-contain rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            ) : (
              <div 
                className={`flex flex-col items-center justify-center border-2 border-dashed ${
                  errors.coverImage ? 'border-red-300 bg-red-50' : 'border-gray-300'
                } rounded-lg h-48 bg-gray-50 hover:bg-gray-100 transition cursor-pointer`}
                onClick={() => coverInputRef.current.click()}
              >
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <p className="mt-2 text-sm text-gray-600">Click to upload cover image</p>
              </div>
            )}
            
            <input 
              ref={coverInputRef}
              type="file" 
              name="coverImage" 
              accept="image/*" 
              onChange={handleCoverImageChange} 
              className="hidden"
            />
          </div>
          
          {/* Additional Images Section */}
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Additional Images 
                {errors.images && <span className="text-red-500 text-xs"> - {errors.images}</span>}
              </label>
              {imagePreviews.length > 0 && (
                <button 
                  type="button"
                  onClick={clearAllAdditionalImages}
                  className="text-xs text-red-600 hover:text-red-800"
                >
                  Clear All
                </button>
              )}
            </div>
            
            {imagePreviews.length > 0 ? (
              <div className="grid grid-cols-3 gap-2">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={preview} 
                      alt={`Preview ${index + 1}`} 
                      className="w-full h-24 object-cover rounded-lg border border-gray-200"
                    />
                    <button 
                      type="button"
                      onClick={() => removeAdditionalImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <span className="text-xs">×</span>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div 
                className={`flex flex-col items-center justify-center border-2 border-dashed ${
                  errors.images ? 'border-red-300 bg-red-50' : 'border-gray-300'
                } rounded-lg h-48 bg-gray-50 hover:bg-gray-100 transition cursor-pointer`}
                onClick={() => imagesInputRef.current.click()}
              >
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <p className="mt-2 text-sm text-gray-600">Click to upload additional images</p>
                <p className="text-xs text-gray-500 mt-1">(Multiple selection allowed)</p>
              </div>
            )}
            
            <input 
              ref={imagesInputRef}
              type="file" 
              name="images" 
              accept="image/*" 
              multiple 
              onChange={handleImagesChange} 
              className="hidden"
            />
            
            {imagePreviews.length > 0 && (
              <Button 
                type="button"
                variant="outline"
                onClick={() => imagesInputRef.current.click()}
                className="mt-3 w-full py-2 text-sm"
              >
                + Add More Images
              </Button>
            )}
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button 
            type="button"
            variant="secondary"
            onClick={() => {
              // Reset form
              setForm({
                name: '',
                type: '',
                description: '',
                coverImage: null,
                images: []
              });
              setCoverPreview(null);
              imagePreviews.forEach(preview => URL.revokeObjectURL(preview));
              setImagePreviews([]);
              setErrors({});
              if (coverInputRef.current) coverInputRef.current.value = '';
              if (imagesInputRef.current) imagesInputRef.current.value = '';
            }}
          >
            Reset Form
          </Button>
          
          <Button 
            type="submit"
            variant="primary"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Add Item
          </Button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddItems;