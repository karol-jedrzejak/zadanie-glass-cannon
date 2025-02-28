<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductsStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|unique:products',
            'description' => 'required|string|min:5|max:1000',
            'price' => 'required|numeric|min:0.01|max:10000|decimal:0,2',
            'stock' => 'required|min:0|max:1000',
            'rank' => 'required|integer|min:1|max:100',
            'image' => 'required|string|max:1000'
        ];
    }

    public function messages(): array
    {
        return [
            'name.unique' => 'Provide an unique name for product.',
        ];
    }
}
