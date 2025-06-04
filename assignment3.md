
# Assignment 3: Deployment and Integration of LLMs
**Mugabo**
**LS2425229**
## Objective

This assignment explores both online and local deployment of Large Language Models (LLMs) and their integration into a development environment. I utilized:

-   **Online model**: OpenAI GPT-3.5 via API
    
-   **Local model**: Ollama (LLaMA3) on local machine
    
-   **Development**: Django-based Web Assistant + VS Code for testing and integration
    

----------

## I. Model Deployment and Usage

###  Online Model API: OpenAI GPT-3.5

-   **API Key** obtained from OpenAI (https://platform.openai.com/account/api-keys)
    
-   **Endpoint** used: `https://api.openai.com/v1/chat/completions`
    
-   **Model**: `gpt-3.5-turbo`
    
-   **Integration**: Incorporated into a Django-based Web Assistant using jQuery and AJAX.
    

#### 💬 Example API Call (Python):

```
import requests
import time

def query_openai(prompt):
    api_key = "sk-..."
    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }
    data = {
        "model": "gpt-3.5-turbo",
        "messages": [{"role": "user", "content": prompt}]
    }
    start_time = time.time()
    response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=data)
    end_time = time.time()
    return response.json()["choices"][0]["message"]["content"], (end_time - start_time) * 1000
```

----------

###  Local Model Deployment: Ollama (LLaMA3)

-   I downloaded and installed **Ollama** :
- I deployed LLaMA3:
    
    ```
    ollama run llama3
    ```
    

    

#### 💬 Example API Call (Python):

```
import requests
import time

def query_ollama(prompt):
    start_time = time.time()
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={"model": "llama3", "prompt": prompt, "stream": False}
    )
    end_time = time.time()
    return response.json()["response"], (end_time - start_time) * 1000
```

----------

## II. Integration Into Development Environment

###  Integrated into VS Code

-   Used built-in terminal to test both OpenAI and Ollama scripts
    
-   Prompted same input to both models and measured time taken
    

#### 🧪 Sample Output:

![Testing both OpenAI and Ollama via VS Code IDE](https://raw.githubusercontent.com/Dolph250/mugabo/refs/heads/main/src/Assets/Projects/Ollama1.PNG)



### ⏱️ Time Complexity and Model Comparison

<table>
  <thead>
    <tr>
      <th>Metric</th>
      <th>OpenAI GPT-3.5</th>
      <th>Ollama (LLaMA3)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Execution Time (ms)</strong></td>
      <td>~600–700 ms</td>
      <td>~1300–1600 ms</td>
    </tr>
    <tr>
      <td><strong>Latency</strong></td>
      <td>Low (cloud-scale)</td>
      <td>Higher (local limits)</td>
    </tr>
    <tr>
      <td><strong>Accuracy</strong></td>
      <td>High</td>
      <td>Acceptable for general use</td>
    </tr>
    <tr>
      <td><strong>Hardware Dependency</strong></td>
      <td>Cloud-hosted (GPU)</td>
      <td>Local CPU/GPU required</td>
    </tr>
  </tbody>
</table>

<p><strong>Conclusion:</strong> OpenAI GPT-3.5 performs faster and more responsively on short prompts due to powerful cloud GPUs. Ollama ensures offline access and data privacy, but is bound by your machine’s specs.</p>



## III. Web Assistant Integration (Django)

###  Django-based Web Assistant with OpenAI

-   Built with Django, HTML, jQuery
    
-   AJAX  (Asynchronous JavaScript and XML) used to send user prompt to `/ask-openai/` endpoint
    
-   Response shown in styled conversation layout with avatar
    

####  JavaScript AJAX Call:

```
$.ajax({
    url: '/ask-openai/',
    type: 'POST',
    data: {
        prompt: $("#myText").val(),
        csrfmiddlewaretoken: '{{ csrf_token }}'
    },
    success: function(data){
        $(".askme").append(userInputHTML);
        $(".response").append(botResponseHTML);
    }
});
```

####  Django-based endpoint:

```
# /ask-openai/
client = OpenAI(api_key="MyKey")
@csrf_exempt
def ask_openai(request):
    if request.method == 'POST':
        prompt = request.POST.get('prompt', '')
        try:
            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "user", "content": prompt}
                ],
                max_tokens=300
            )
            answer = response.choices[0].message.content
            return JsonResponse({"response": answer})
        except Exception as e:
            return JsonResponse({"response": f"Error: {str(e)}"})
```


### Dynamic Chat UI Layout

-   User input and response styled using CSS with chatbot avatars
    
-   Implemented logic to append new divs vertically in timeline-style chat
    
![Web Assistant](https://raw.githubusercontent.com/Dolph250/mugabo/refs/heads/main/src/Assets/Projects/WebAssistant.PNG)
----------

## IV. Research Workflow Enhancement

### I intergrated OpenAI for:
  
-   Conducting research regarding flooding
    

###  Results:
   
-  The intergrated model generated brief statistics regarding flooding inundation in a specific area I prompted, and thus, it summarized various concepts regarding flooding.

----------

## Conclusion

 - I integrated online model setup and usage
 - I executed Local model (Ollama) deployment
 - I integrated both OpenAI and Ollama into VSCode environment for interaction
 - I designed and developed web assistant that intergrates OpenAI API. That Web App is based on Django (Python Framework),  jQuery (JavaScript library), and HTML
 - I prepared Markdown Documentation 
 - I used the intregrated OpenAI API for Research optimization



## Deployment

This report has been added to the Assignment 2 (Personal blog).
