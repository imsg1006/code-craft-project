import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Wand2, Download, Save, Sparkles, Image as ImageIcon } from "lucide-react";
import Navigation from "@/components/Navigation";

interface GeneratedImage {
  id: string;
  prompt: string;
  url: string;
  model: string;
  timestamp: Date;
}

const ImageGen = () => {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("flux");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsGenerating(true);
    
    // TODO: Replace with actual API call when backend is ready
    setTimeout(() => {
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        prompt,
        url: "/placeholder.svg", // This would be the actual generated image URL
        model,
        timestamp: new Date()
      };
      
      setGeneratedImages(prev => [newImage, ...prev]);
      setIsGenerating(false);
    }, 3000);
  };

  const handleSaveImage = (image: GeneratedImage) => {
    // TODO: Implement save functionality when backend is ready
    console.log("Saving image:", image);
  };

  const handleDownloadImage = (image: GeneratedImage) => {
    // TODO: Implement download functionality
    console.log("Downloading image:", image);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">AI Image Generation</h1>
            <p className="text-muted-foreground text-lg">
              Transform your imagination into stunning visuals with AI-powered image generation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Generation Form */}
            <div>
              <Card className="glass-card mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Wand2 className="h-5 w-5 mr-2 text-primary" />
                    Create Image
                  </CardTitle>
                  <CardDescription>
                    Describe what you want to see and let AI bring it to life
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleGenerate} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="prompt" className="text-sm font-medium">
                        Image Description
                      </label>
                      <Textarea
                        id="prompt"
                        placeholder="Describe your image in detail... (e.g., 'A futuristic cityscape with flying cars at sunset, cyberpunk style')"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        className="input-ai min-h-[120px] resize-none"
                        disabled={isGenerating}
                      />
                      <p className="text-xs text-muted-foreground">
                        Be specific and descriptive for better results
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="model" className="text-sm font-medium">
                        AI Model
                      </label>
                      <Select value={model} onValueChange={setModel} disabled={isGenerating}>
                        <SelectTrigger className="input-ai">
                          <SelectValue placeholder="Select model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flux">Flux (Recommended)</SelectItem>
                          <SelectItem value="stable-diffusion">Stable Diffusion</SelectItem>
                          <SelectItem value="midjourney">Midjourney Style</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isGenerating || !prompt.trim()}
                      className="w-full btn-ai-primary h-12"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Generating Image...
                        </>
                      ) : (
                        <>
                          <Sparkles className="h-5 w-5 mr-2" />
                          Generate Image
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Generation Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Include style keywords like "photorealistic", "cartoon", "oil painting"</li>
                    <li>• Specify lighting: "sunset", "neon lighting", "dramatic shadows"</li>
                    <li>• Add composition details: "close-up", "wide angle", "top view"</li>
                    <li>• Mention art styles: "cyberpunk", "fantasy", "minimalist"</li>
                    <li>• Be specific about colors and mood</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Generated Images */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Generated Images</h2>
                <p className="text-muted-foreground">Your recently created images</p>
              </div>

              {isGenerating && (
                <Card className="glass-card mb-6">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <div className="relative">
                          <div className="w-24 h-24 mx-auto mb-4 rounded-lg bg-gradient-primary animate-pulse" />
                          <Loader2 className="absolute inset-0 w-12 h-12 m-auto animate-spin text-white" />
                        </div>
                        <h3 className="text-lg font-medium mb-2">Creating your image...</h3>
                        <p className="text-muted-foreground">This may take a few seconds</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="space-y-6">
                {generatedImages.length > 0 ? (
                  generatedImages.map((image) => (
                    <Card key={image.id} className="glass-card hover:glow-purple transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                          <ImageIcon className="h-16 w-16 text-muted-foreground" />
                        </div>
                        
                        <div className="space-y-3">
                          <p className="font-medium line-clamp-2">{image.prompt}</p>
                          
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary">
                              {image.model}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {image.timestamp.toLocaleTimeString()}
                            </Badge>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleSaveImage(image)}
                              className="flex-1 text-accent hover:text-accent/80"
                            >
                              <Save className="h-4 w-4 mr-2" />
                              Save
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDownloadImage(image)}
                              className="flex-1 text-primary hover:text-primary/80"
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : !isGenerating ? (
                  <Card className="glass-card">
                    <CardContent className="pt-6">
                      <div className="text-center py-12">
                        <ImageIcon className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="text-lg font-medium mb-2">No images yet</h3>
                        <p className="text-muted-foreground">
                          Generate your first AI image using the form on the left
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImageGen;