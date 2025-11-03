'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save, Image as ImageIcon, Type, Loader2, Plus, Trash2 } from 'lucide-react';
import { ImageUpload } from '@/components/ui/image-upload';
import Link from 'next/link';

export default function GalleryPageEditor() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [galleryTab, setGalleryTab] = useState<'list' | 'add'>('list');
  const [newImage, setNewImage] = useState({
    id: 0,
    src: '/images/fillerevents.jpg',
    alt: '',
    title: '',
    category: '',
  });
  
  // All sections state
  const [pageData, setPageData] = useState({
    hero: {
      title: 'Photo Gallery',
      subtitle: 'Capturing moments of worship, fellowship, and community life that showcase the heart and spirit of Holy Ghost Zone MK.',
      backgroundImage: '/prayer-worship-hands-raised.jpg'
    },
    recentTitle: 'Recent Highlights',
    recentSubtitle: 'A collection of our most recent and memorable moments',
    reflection: {
      title: 'What If Every Moment Matters?',
      backgroundImage: '/images/temp.webp'
    },
    galleryImages: [
      {
        id: 1,
        src: '/images/fillerevents.jpg',
        alt: 'Sunday worship service with congregation in praise',
        title: 'Sunday Worship Service',
        category: 'Worship'
      }
    ]
  });

  // Load data from Firebase on mount
  useEffect(() => {
    loadPageData();
  }, []);

  const loadPageData = async () => {
    try {
      const res = await fetch('/api/admin/pages/gallery', { cache: 'no-store' });
      if (!res.ok) throw new Error('Failed to load');
      const data = await res.json();
      setPageData(prevData => ({
        ...prevData,
        ...data
      }));
    } catch (error) {
      console.error('Error loading page data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/admin/pages/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...pageData,
          updatedAt: new Date().toISOString(),
        })
      });
      if (!res.ok) throw new Error('Failed to save');
      
      alert('Changes saved successfully! Refresh the gallery page to see your changes.');
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Error saving changes. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-gray-900 mx-auto mb-4" />
          <p className="text-gray-600">Loading page data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Edit Gallery Page</h1>
                <p className="text-sm text-gray-500">Manage gallery page content and images</p>
              </div>
            </div>
            <Button onClick={handleSave} className="gap-2" disabled={isSaving}>
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Component List */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Page Sections</h3>
              <nav className="space-y-2">
                <a href="#hero-section" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border border-gray-200">
                  Hero Section
                </a>
                <a href="#gallery-section" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border border-gray-200">
                  Gallery Images
                </a>
                <a href="#reflection-section" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border border-gray-200">
                  Reflection Section
                </a>
              </nav>
            </div>
          </div>

          {/* Right Content - Editable Components */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div id="hero-section" className="bg-white border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 flex items-center justify-center">
                  <Type className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Hero Section</h3>
                  <p className="text-sm text-gray-500">Main landing section with title and subtitle</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Main Title
                  </label>
                  <Input
                    value={pageData.hero.title}
                    onChange={(e) => setPageData({ ...pageData, hero: { ...pageData.hero, title: e.target.value }})}
                    placeholder="Enter main title"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <Textarea
                    value={pageData.hero.subtitle}
                    onChange={(e) => setPageData({ ...pageData, hero: { ...pageData.hero, subtitle: e.target.value }})}
                    placeholder="Enter subtitle"
                    rows={3}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <ImageIcon className="w-4 h-4 inline mr-2" />
                    Background Image
                  </label>
                  <ImageUpload
                    value={pageData.hero.backgroundImage}
                    onChange={(url) => setPageData({ ...pageData, hero: { ...pageData.hero, backgroundImage: url }})}
                    placeholder="/prayer-worship-hands-raised.jpg"
                  />
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div id="gallery-section" className="bg-white border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-50 flex items-center justify-center">
                  <Type className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Gallery Images Section</h3>
                  <p className="text-sm text-gray-500">Manage photo gallery images</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section Title
                  </label>
                  <Input
                    value={pageData.recentTitle}
                    onChange={(e) => setPageData({ ...pageData, recentTitle: e.target.value })}
                    placeholder="Enter section title"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Section Subtitle
                  </label>
                  <Input
                    value={pageData.recentSubtitle}
                    onChange={(e) => setPageData({ ...pageData, recentSubtitle: e.target.value })}
                    placeholder="Enter section subtitle"
                    className="w-full"
                  />
                </div>

                {/* Gallery Tabs */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <button
                      className={`px-3 py-1.5 text-sm border ${galleryTab==='list' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-900 border-gray-300'}`}
                      onClick={() => setGalleryTab('list')}
                    >Images List</button>
                    <button
                      className={`px-3 py-1.5 text-sm border ${galleryTab==='add' ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-900 border-gray-300'}`}
                      onClick={() => setGalleryTab('add')}
                    >Add New Image</button>
                  </div>

                  {galleryTab === 'list' && (
                    <div className="space-y-6">
                      {pageData.galleryImages.map((image, index) => (
                        <div key={index} className="p-4 border border-gray-200">
                          <div className="flex items-center justify-between mb-4">
                            <h5 className="text-sm font-semibold text-gray-900">Image {index + 1}</h5>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2"><ImageIcon className="w-4 h-4 inline mr-2" />Image URL</label>
                              <ImageUpload
                                value={image.src}
                                onChange={(url) => {
                                  const list = [...pageData.galleryImages]
                                  list[index] = { ...image, src: url }
                                  setPageData({ ...pageData, galleryImages: list })
                                }}
                                placeholder="/images/fillerevents.jpg"
                                previewClassName="w-full h-32 object-cover"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                              <Input
                                value={image.title}
                                onChange={(e) => {
                                  const list = [...pageData.galleryImages]
                                  list[index] = { ...image, title: e.target.value }
                                  setPageData({ ...pageData, galleryImages: list })
                                }}
                                placeholder="Image title"
                              />
                            </div>
                            <div className="md:col-span-2">
                              <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text</label>
                              <Input
                                value={image.alt}
                                onChange={(e) => {
                                  const list = [...pageData.galleryImages]
                                  list[index] = { ...image, alt: e.target.value }
                                  setPageData({ ...pageData, galleryImages: list })
                                }}
                                placeholder="Image alt text"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                              <Input
                                value={image.category}
                                onChange={(e) => {
                                  const list = [...pageData.galleryImages]
                                  list[index] = { ...image, category: e.target.value }
                                  setPageData({ ...pageData, galleryImages: list })
                                }}
                                placeholder="e.g., Worship"
                              />
                            </div>
                          </div>
                          <div className="flex justify-end mt-3">
                            <Button
                              variant="outline"
                              onClick={() => {
                                const list = [...pageData.galleryImages]
                                list.splice(index, 1)
                                setPageData({ ...pageData, galleryImages: list })
                              }}
                            ><Trash2 className="w-4 h-4 mr-2" />Remove</Button>
                          </div>
                        </div>
                      ))}
                      <div>
                        <Button
                          variant="outline"
                          onClick={() => setGalleryTab('add')}
                        ><Plus className="w-4 h-4 mr-2" />Add Image</Button>
                      </div>
                    </div>
                  )}

                  {galleryTab === 'add' && (
                    <div className="space-y-4 border border-gray-200 p-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2"><ImageIcon className="w-4 h-4 inline mr-2" />Image URL</label>
                          <ImageUpload
                            value={newImage.src}
                            onChange={(url)=>setNewImage({...newImage,src:url})}
                            placeholder="/images/fillerevents.jpg"
                            previewClassName="w-full h-32 object-cover"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                          <Input value={newImage.title} onChange={(e)=>setNewImage({...newImage,title:e.target.value})} placeholder="Image title" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Alt Text</label>
                          <Input value={newImage.alt} onChange={(e)=>setNewImage({...newImage,alt:e.target.value})} placeholder="Image alt text" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                          <Input value={newImage.category} onChange={(e)=>setNewImage({...newImage,category:e.target.value})} placeholder="Worship" />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          onClick={()=>{
                            const list = [...pageData.galleryImages, { ...newImage, id: Date.now() }]
                            setPageData({...pageData, galleryImages: list})
                            setNewImage({ id: 0, src:'/images/fillerevents.jpg', alt:'', title:'', category:'' })
                            setGalleryTab('list')
                          }}
                        >Save Image</Button>
                        <Button variant="outline" onClick={()=>setGalleryTab('list')}>Cancel</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Reflection Section */}
            <div id="reflection-section" className="bg-white border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-50 flex items-center justify-center">
                  <Type className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Reflection Section</h3>
                  <p className="text-sm text-gray-500">Philosophical reflection with background image</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <Input
                    value={pageData.reflection.title}
                    onChange={(e) => setPageData({ ...pageData, reflection: { ...pageData.reflection, title: e.target.value }})}
                    placeholder="Enter reflection title"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <ImageIcon className="w-4 h-4 inline mr-2" />
                    Background Image
                  </label>
                  <ImageUpload
                    value={pageData.reflection.backgroundImage}
                    onChange={(url) => setPageData({ ...pageData, reflection: { ...pageData.reflection, backgroundImage: url }})}
                    placeholder="/images/temp.webp"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

